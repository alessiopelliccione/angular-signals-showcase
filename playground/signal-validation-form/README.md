# Angular 21 - Advanced Form Validation with Signals

A comprehensive demonstration of **advanced validation patterns** in Angular 21 featuring async validators, cross-field validation, and conditional validation with Signal-based state management.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-validation-form)

## 🎯 Objective

This demo showcases advanced validation patterns including:
- **Async validation**: Username uniqueness check with simulated API call
- **Cross-field validation**: Password confirmation matching
- **Conditional validation**: VAT number required only for companies
- **Real-time feedback**: Visual indicators for touched, dirty, valid, pending states

## ✨ Features

- **Async Username Validator** - Simulates API call to check availability (1s delay)
- **Cross-Field Password Matching** - Validates confirmPassword against password
- **Conditional VAT Validation** - Required only when "Is Company" is checked
- **Real-Time State Indicators** - Shows form state (valid, touched, dirty, pending)
- **Signal-Based State** - Uses Angular Signals for reactive UI updates
- **Zoneless Angular 21** - Modern change detection

## 🛠 Technologies

- Angular 21
- TypeScript (strict mode)
- Reactive Forms API
- Custom Validators (sync & async)
- Signals for state management
- Standalone components

## 🚀 Quick Start

### Local Development

```bash
npm install
npm run dev
```

The app will open automatically at `http://localhost:4200/`

### Open on StackBlitz

```bash
npm run stackblitz
```

Or visit: [StackBlitz Link](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-validation-form)

## 📖 Validation Patterns Explained

### 1. Async Validator (Username Uniqueness)

```typescript
private asyncUsernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    const takenUsernames = ['admin', 'user', 'test', 'demo'];

    return new Promise((resolve) => {
      setTimeout(() => {
        const username = control.value?.toLowerCase();
        if (takenUsernames.includes(username)) {
          resolve({ usernameTaken: true });
        } else {
          resolve(null);
        }
      }, 1000); // Simulate network delay
    });
  };
}
```

**Key Points:**
- Returns a `Promise<ValidationErrors | null>`
- Simulates 1-second API delay
- Shows "pending" state during validation
- `updateOn: 'blur'` reduces unnecessary API calls

### 2. Cross-Field Validator (Password Matching)

```typescript
private passwordMatchValidator() {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = this.form?.controls.password.value;
    const confirmPassword = control.value;

    if (!confirmPassword) {
      return null; // Don't validate empty (handled by required)
    }

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}
```

**Key Points:**
- Validates one field against another
- Applied to `confirmPassword` field
- Automatically re-validates when password changes
- Clear error messaging with `passwordMismatch` error key

### 3. Conditional Validator (VAT Number)

```typescript
toggleCompany(): void {
  this.isCompany.update(v => !v);
  const vatControl = this.form.controls.vatNumber;

  if (this.isCompany()) {
    vatControl.setValidators([Validators.required]);
  } else {
    vatControl.clearValidators();
    vatControl.setValue('');
  }

  vatControl.updateValueAndValidity();
}
```

**Key Points:**
- Validators added/removed dynamically
- Field shown/hidden based on signal state
- Automatic validation update with `updateValueAndValidity()`
- Clean state management with Signals

## 🎓 Why This Approach is Better

### Traditional Reactive Forms Approach

```typescript
// ❌ Complex state management
this.form.valueChanges.subscribe(value => {
  if (value.isCompany) {
    // Manual state tracking
    this.showVAT = true;
  }
});

// ❌ Verbose async validators
this.username.statusChanges.subscribe(status => {
  this.isCheckingUsername = status === 'PENDING';
});
```

### Signal-Based Approach

```typescript
// ✅ Clean state with Signals
protected isCompany = signal(false);

// ✅ Simple reactive template
@if (isCompany()) {
  <input formControlName="vatNumber" />
}

// ✅ Built-in state tracking
@if (form.controls.username.pending) {
  <span>Checking...</span>
}
```

### Key Advantages

1. **Clearer State Management** - Signals make reactive state explicit
2. **Built-in State Tracking** - `pending`, `touched`, `dirty` available directly on controls
3. **Less Boilerplate** - No need for manual subscriptions
4. **Better Performance** - Signals optimize change detection
5. **Type Safety** - Strong typing throughout

## 🧪 How to Test

### Test Async Validator (Username)

1. Type "admin", "user", or "test" in username field
2. Blur the field (click outside)
3. Wait 1 second for validation
4. See error: "This username is already taken"
5. Try other names like "john" - should be valid

### Test Cross-Field Validator (Passwords)

1. Enter password: "password123"
2. Enter confirmPassword: "password456"
3. See error: "Passwords do not match"
4. Change confirmPassword to "password123"
5. See success: "Passwords match"

### Test Conditional Validator (VAT)

1. Check "Is Company" checkbox
2. VAT Number field appears (required)
3. Try to submit without VAT - form invalid
4. Enter VAT number - form valid
5. Uncheck "Is Company" - VAT field disappears, form valid again

## 📋 Form State Indicators

The demo shows four key form states:

- **Valid/Invalid**: Overall form validation status
- **Touched**: Has any field been focused?
- **Dirty**: Has any field value changed?
- **Pending**: Is async validation in progress?

These states are accessed directly from form controls:

```typescript
@if (form.controls.username.pending) { ... }
@if (form.controls.password.invalid && form.controls.password.touched) { ... }
@if (form.valid) { ... }
```

## 🔍 Code Structure

```
src/app/
├── app.config.ts  - Zoneless configuration
├── app.css        - Styling with validation states
└── app.ts         - Main component with validators
```

## 🎯 Acceptance Criteria

- ✅ Async validator reports "usernameTaken" error for reserved names
- ✅ Cross-field validator shows "passwordMismatch" error when passwords differ
- ✅ Changing isCompany to true makes VAT required immediately
- ✅ Form state indicators show current validation status
- ✅ Submit button disabled when form invalid or pending
- ✅ Success message shows submitted data (password hidden)

## 💡 Best Practices Demonstrated

1. **Async Validators with `updateOn: 'blur'`** - Reduces API calls
2. **Clear Error Keys** - `usernameTaken`, `passwordMismatch` for specific feedback
3. **Conditional Validators** - Dynamic validator management based on state
4. **Visual Feedback** - Pending, error, and success states
5. **Signal-Based State** - Clean reactive patterns with Angular Signals

## 🏗 Built With

Angular CLI 21.0.1
