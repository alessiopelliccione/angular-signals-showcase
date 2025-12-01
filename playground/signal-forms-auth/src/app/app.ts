import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  styleUrl: './app.css',
  template: `
    <div class="container">
      <div class="card">
        <h1>{{ isLogin() ? 'Login' : 'Sign Up' }}</h1>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              placeholder="Enter your email"
            />
            @if (form.controls.email.invalid && form.controls.email.touched) {
              <span class="error">Valid email required</span>
            }
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              formControlName="password"
              placeholder="Enter your password"
            />
            @if (form.controls.password.invalid && form.controls.password.touched) {
              <span class="error">Password required (min 6 chars)</span>
            }
          </div>

          @if (!isLogin()) {
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                formControlName="confirmPassword"
                placeholder="Confirm your password"
              />
              @if (form.controls.confirmPassword.invalid && form.controls.confirmPassword.touched) {
                <span class="error">Passwords must match</span>
              }
            </div>
          }

          <button type="submit" [disabled]="form.invalid">
            {{ isLogin() ? 'Login' : 'Sign Up' }}
          </button>
        </form>

        <div class="toggle">
          <p>
            {{ isLogin() ? "Don't have an account?" : 'Already have an account?' }}
            <a (click)="toggleMode()">
              {{ isLogin() ? 'Sign Up' : 'Login' }}
            </a>
          </p>
        </div>

        @if (submitted()) {
          <div class="success">
            ✓ {{ isLogin() ? 'Logged in' : 'Signed up' }} successfully!
          </div>
        }
      </div>
    </div>
  `,
})
export class App {
  // Signal to toggle between login and signup modes
  protected readonly isLogin = signal(true);

  // Signal to show success message after form submission
  protected readonly submitted = signal(false);

  // Reactive form with email, password, and confirmPassword fields
  protected form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(''),
  });

  /**
   * Toggle between login and signup modes
   * - Updates the isLogin signal
   * - Resets the form
   * - Dynamically adds/removes validators for confirmPassword
   */
  toggleMode() {
    this.isLogin.update(v => !v);
    this.submitted.set(false);
    this.form.reset();

    // Add validator for confirmPassword in signup mode
    if (!this.isLogin()) {
      this.form.controls.confirmPassword.setValidators([Validators.required]);
    } else {
      this.form.controls.confirmPassword.clearValidators();
    }
    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  /**
   * Handle form submission
   * - Validates the form
   * - Checks password match for signup mode
   * - Shows success message
   */
  onSubmit() {
    if (this.form.valid) {
      // Additional validation for signup: check password match
      if (!this.isLogin()) {
        const password = this.form.controls.password.value;
        const confirmPassword = this.form.controls.confirmPassword.value;

        if (password !== confirmPassword) {
          this.form.controls.confirmPassword.setErrors({ mismatch: true });
          return;
        }
      }

      console.log('Form submitted:', {
        mode: this.isLogin() ? 'login' : 'signup',
        data: this.form.value
      });

      // Show success message for 3 seconds
      this.submitted.set(true);
      setTimeout(() => this.submitted.set(false), 3000);
    }
  }
}
