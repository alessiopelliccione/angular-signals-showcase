import { Component, signal, computed, effect } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  styleUrl: './app.css',
  template: `
    <div class="container">
      <h1>Advanced Form Validation</h1>
      <p class="subtitle">Signal-based validation with async, cross-field, and conditional validators</p>

      <!-- Info box -->
      <div class="info-box">
        <strong>Try these validations:</strong>
        <ul>
          <li>Username: "admin", "user", or "test" are taken (async check)</li>
          <li>Password: must be at least 8 characters</li>
          <li>Confirm Password: must match password (cross-field)</li>
          <li>VAT: required only when "Is Company" is checked (conditional)</li>
        </ul>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <!-- Username field with async validation -->
        <div class="form-group">
          <label for="username">Username *</label>
          <input
            id="username"
            type="text"
            formControlName="username"
            placeholder="Enter username"
          />

          @if (form.controls.username.pending) {
            <div class="pending">
              <span class="spinner"></span>
              Checking username availability...
            </div>
          }

          @if (form.controls.username.invalid && form.controls.username.touched && !form.controls.username.pending) {
            @if (form.controls.username.errors?.['required']) {
              <div class="error">❌ Username is required</div>
            }
            @if (form.controls.username.errors?.['usernameTaken']) {
              <div class="error">❌ This username is already taken</div>
            }
          }

          @if (form.controls.username.valid && form.controls.username.touched) {
            <div class="success">✓ Username is available</div>
          }
        </div>

        <!-- Password field -->
        <div class="form-group">
          <label for="password">Password *</label>
          <input
            id="password"
            type="password"
            formControlName="password"
            placeholder="Enter password (min 8 chars)"
          />

          @if (form.controls.password.invalid && form.controls.password.touched) {
            @if (form.controls.password.errors?.['required']) {
              <div class="error">❌ Password is required</div>
            }
            @if (form.controls.password.errors?.['minlength']) {
              <div class="error">
                ❌ Password must be at least {{ form.controls.password.errors?.['minlength'].requiredLength }} characters
                (current: {{ form.controls.password.errors?.['minlength'].actualLength }})
              </div>
            }
          }
        </div>

        <!-- Confirm Password field with cross-field validation -->
        <div class="form-group">
          <label for="confirmPassword">Confirm Password *</label>
          <input
            id="confirmPassword"
            type="password"
            formControlName="confirmPassword"
            placeholder="Confirm your password"
          />

          @if (form.controls.confirmPassword.invalid && form.controls.confirmPassword.touched) {
            @if (form.controls.confirmPassword.errors?.['required']) {
              <div class="error">❌ Please confirm your password</div>
            }
            @if (form.controls.confirmPassword.errors?.['passwordMismatch']) {
              <div class="error">❌ Passwords do not match</div>
            }
          }

          @if (form.controls.confirmPassword.valid && form.controls.confirmPassword.touched && form.controls.confirmPassword.value) {
            <div class="success">✓ Passwords match</div>
          }
        </div>

        <!-- Is Company checkbox for conditional validation -->
        <div class="checkbox-group">
          <input
            id="isCompany"
            type="checkbox"
            [checked]="isCompany()"
            (change)="toggleCompany()"
          />
          <label for="isCompany">Is Company</label>
        </div>

        <!-- VAT Number field - conditionally required -->
        @if (isCompany()) {
          <div class="form-group">
            <label for="vatNumber">VAT Number *</label>
            <input
              id="vatNumber"
              type="text"
              formControlName="vatNumber"
              placeholder="Enter VAT number"
            />

            @if (form.controls.vatNumber.invalid && form.controls.vatNumber.touched) {
              @if (form.controls.vatNumber.errors?.['required']) {
                <div class="error">❌ VAT Number is required for companies</div>
              }
            }

            @if (form.controls.vatNumber.valid && form.controls.vatNumber.touched) {
              <div class="success">✓ VAT Number provided</div>
            }
          </div>
        }

        <!-- Form state indicators -->
        <div class="field-states">
          <div class="state-badge" [class.invalid]="form.invalid" [class.valid]="form.valid">
            Form: {{ form.valid ? 'Valid' : 'Invalid' }}
          </div>
          <div class="state-badge" [class.touched]="form.touched">
            Touched: {{ form.touched ? 'Yes' : 'No' }}
          </div>
          <div class="state-badge" [class.dirty]="form.dirty">
            Dirty: {{ form.dirty ? 'Yes' : 'No' }}
          </div>
          <div class="state-badge" [class.pending]="form.pending">
            Pending: {{ form.pending ? 'Yes' : 'No' }}
          </div>
        </div>

        <!-- Submit button -->
        <button type="submit" class="submit-btn" [disabled]="form.invalid || form.pending">
          {{ form.pending ? 'Validating...' : 'Submit Registration' }}
        </button>
      </form>

      <!-- Result display -->
      @if (submittedData()) {
        <div class="result">
          <h3>✅ Registration Submitted Successfully!</h3>
          <pre>{{ submittedData() }}</pre>
        </div>
      }
    </div>
  `,
})
export class App {
  // Signal to track if user is registering as a company
  protected isCompany = signal(false);

  // Signal to store submitted data
  protected submittedData = signal<string>('');

  // Reactive form with custom validators
  protected form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [this.asyncUsernameValidator()],
      updateOn: 'blur' // Only validate on blur to reduce API calls
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    vatNumber: new FormControl('')
  });

  constructor() {
    // Effect to watch password changes and validate confirmPassword
    effect(() => {
      // Track password changes
      this.form.controls.password.valueChanges.subscribe(() => {
        // Revalidate confirmPassword when password changes
        const confirmPassword = this.form.controls.confirmPassword;
        if (confirmPassword.value) {
          confirmPassword.updateValueAndValidity();
        }
      });
    });

    // Add cross-field validator for password matching
    this.form.controls.confirmPassword.addValidators(
      this.passwordMatchValidator()
    );
  }

  /**
   * Async validator to check if username is already taken
   * Simulates an API call with a timeout
   */
  private asyncUsernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      // List of taken usernames (simulating database)
      const takenUsernames = ['admin', 'user', 'test', 'demo'];

      return new Promise((resolve) => {
        // Simulate API delay
        setTimeout(() => {
          const username = control.value?.toLowerCase();

          if (takenUsernames.includes(username)) {
            resolve({ usernameTaken: true });
          } else {
            resolve(null);
          }
        }, 1000); // 1 second delay to simulate network request
      });
    };
  }

  /**
   * Cross-field validator to ensure password and confirmPassword match
   * This validator is applied to the confirmPassword field
   */
  private passwordMatchValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = this.form?.controls.password.value;
      const confirmPassword = control.value;

      // Don't validate if confirmPassword is empty (handled by required)
      if (!confirmPassword) {
        return null;
      }

      // Check if passwords match
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  /**
   * Toggle company status and update VAT number validation
   * This demonstrates conditional validation
   */
  toggleCompany(): void {
    this.isCompany.update(v => !v);

    const vatControl = this.form.controls.vatNumber;

    if (this.isCompany()) {
      // Add required validator when company is selected
      vatControl.setValidators([Validators.required]);
    } else {
      // Remove validators and clear value when not a company
      vatControl.clearValidators();
      vatControl.setValue('');
    }

    // Update validity after changing validators
    vatControl.updateValueAndValidity();

    console.log('🏢 Company status:', this.isCompany());
  }

  /**
   * Handle form submission
   * Only called when form is valid
   */
  onSubmit(): void {
    if (this.form.valid) {
      const formData = {
        username: this.form.controls.username.value,
        password: '***hidden***', // Don't log actual password
        isCompany: this.isCompany(),
        ...(this.isCompany() ? { vatNumber: this.form.controls.vatNumber.value } : {})
      };

      this.submittedData.set(JSON.stringify(formData, null, 2));

      console.log('📋 Form submitted:', formData);

      // Reset form after successful submission
      setTimeout(() => {
        this.submittedData.set('');
        this.form.reset();
        this.isCompany.set(false);
      }, 5000);
    }
  }
}
