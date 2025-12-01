# Angular 21 - Login/Signup Signal Form

A simple and elegant authentication form demonstrating signal-based reactive form patterns with dynamic validation.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-forms-auth)

## ✨ Features

- **Mode Toggle**: Switch between login and signup with reactive form updates
- **Email Validation**: Real-time regex pattern validation
- **Password Validation**: Minimum length requirements with visual feedback
- **Dynamic Validators**: Validators automatically added/removed based on mode
- **Zoneless Angular 21**: Modern change detection with `provideZonelessChangeDetection()`
- **Minimal Structure**: All-in-one component with external CSS
- **Signal-Based State**: Reactive state management using Angular Signals

## 🛠 Technologies

- Angular 21
- TypeScript 5.9
- Reactive Forms
- Angular Signals
- Zoneless Change Detection

## Quick Start

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

Or visit: [https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-forms-auth](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-forms-auth)

## 📖 What You'll Learn

- **Signal State Management**: Using `isLogin` and `submitted` signals for reactive UI
- **Form Validation**: Email regex, password length, and password matching
- **Dynamic Validators**: Changing validators based on login/signup mode
- **Template Control Flow**: Using `@if` for conditional rendering
- **Clean Separation**: External CSS for better maintainability

## 📁 Code Structure

```
src/app/
├── app.ts         # Main component with form logic
├── app.css        # Component styles
└── app.config.ts  # Zoneless configuration
```

## 🎯 Key Concepts

### Toggle Mode with Signal

```typescript
protected readonly isLogin = signal(true);

toggleMode() {
  this.isLogin.update(v => !v);
  // Validators automatically update
}
```

### Dynamic Validators

```typescript
if (!this.isLogin()) {
  this.form.controls.confirmPassword.setValidators([Validators.required]);
} else {
  this.form.controls.confirmPassword.clearValidators();
}
```

### Reactive Templates

```typescript
@if (isLogin()) {
  <h2>Login</h2>
} @else {
  <h2>Sign Up</h2>
}
```

Built with Angular CLI 21.0.1
