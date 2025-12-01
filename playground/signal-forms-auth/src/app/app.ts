import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * Auth Form Example
 * 
 * This component demonstrates how to combine Angular Signals with Reactive Forms.
 * 
 * Key Concepts:
 * - **State Management**: Signals (`isLogin`, `submitted`) manage the UI state (loading, visibility, mode).
 * - **Form Model**: `FormGroup` serves as the single source of truth for form data and validation.
 * - **Dynamic Validation**: Validators are added/removed based on the signal state (login vs signup).
 */
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Signal to toggle between login and signup modes
  // This represents the "View State" - unrelated to the form data itself
  protected readonly isLogin = signal(true);

  // Signal to show success message after form submission
  protected readonly submitted = signal(false);

  // Reactive form model
  // The FormGroup holds the values and validation state of the form fields.
  // Unlike the "Signal Forms" pattern where a signal holds the model, here Reactive Forms
  // manages the data, while signals manage the *context* around the form.
  protected form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(''),
  });

  /**
   * Toggle between login and signup modes
   * 
   * When the mode changes (via signal update), we:
   * 1. Update the UI state (isLogin)
   * 2. Reset the form model (form.reset())
   * 3. Update the validation rules (conditional logic)
   */
  toggleMode() {
    // Update signal state
    this.isLogin.update(v => !v);
    this.submitted.set(false);
    
    // Reset form model
    this.form.reset();

    // Dynamic validation logic based on signal state
    if (!this.isLogin()) {
      // Signup mode: specific validation
      this.form.controls.confirmPassword.setValidators([Validators.required]);
    } else {
      // Login mode: simplify validation
      this.form.controls.confirmPassword.clearValidators();
    }
    
    // Ensure validation state is reflected immediately
    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  /**
   * Handle form submission
   * 
   * Accesses the form model state (`this.form.valid`, `this.form.value`) 
   * and updates the UI signals (`submitted`).
   */
  onSubmit() {
    if (this.form.valid) {
      // Additional validation that depends on multiple fields
      if (!this.isLogin()) {
        const password = this.form.controls.password.value;
        const confirmPassword = this.form.controls.confirmPassword.value;

        if (password !== confirmPassword) {
          this.form.controls.confirmPassword.setErrors({ mismatch: true });
          return;
        }
      }

      // Log the form data (The "Model" value)
      console.log('Form submitted:', {
        mode: this.isLogin() ? 'login' : 'signup',
        data: this.form.value
      });

      // Update UI signal to show feedback
      this.submitted.set(true);
      setTimeout(() => this.submitted.set(false), 3000);
    }
  }
}
