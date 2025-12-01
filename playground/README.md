# Playground - Angular Signal Forms Example

This directory contains a complete Angular 21 project demonstrating Signal Forms patterns and best practices.

## 📁 Project

### signal-forms-auth

**Login/Signup Form with Dynamic Validation**

- Toggle between login and signup modes
- Dynamic validators based on mode
- Email and password validation
- Password confirmation for signup
- Zoneless Angular 21

```bash
npm run dev:auth-form
```

[Open in StackBlitz](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-forms-auth) | [View Code](./signal-forms-auth)

**What you'll learn:**
- Using signals for form state management
- Implementing form validation with signals
- Dynamic validator configuration

---

## 🚀 Running Example Locally

The example can be run from the root directory:

```bash
# From root directory
npm run dev:auth-form
```

The example will open automatically at `http://localhost:4200/`

## 🌐 Opening in StackBlitz

The project includes a StackBlitz link for online editing and sharing. Click the "Open in StackBlitz" badge in the project's README.

## 🛠️ Technologies

The playground project uses:
- **Angular 21** - Latest version with zoneless change detection
- **TypeScript 5.9** - Strict mode enabled
- **Reactive Forms** - Angular's form API
- **Signals** - For reactive state management
- **Standalone Components** - No NgModule needed

## 📝 Project Structure

The project follows a minimal structure:

```
signal-xxx-form/
├── src/
│   ├── app/
│   │   ├── app.ts         # Main component
│   │   ├── app.css        # Styles
│   │   └── app.config.ts  # Zoneless configuration
│   └── main.ts            # Bootstrap
├── README.md              # Project documentation
├── stackblitz.json        # StackBlitz configuration
└── package.json           # Dependencies
```

## 🎯 Best Practices Demonstrated

1. **Signal-Based State**: Use signals for reactive form state
2. **Zoneless Configuration**: Modern change detection with `provideZonelessChangeDetection()`
3. **Type Safety**: Full TypeScript support with strict mode
4. **Clean Validators**: Pure, composable validation functions
5. **Minimal Boilerplate**: Less code compared to traditional Reactive Forms
6. **Clear Error Handling**: Typed error keys for specific feedback

## 📚 Resources

- [Angular Signals Documentation](https://angular.dev/guide/signals)
- [Angular Forms Guide](https://angular.dev/guide/forms)
- [StackBlitz Angular Guide](https://developer.stackblitz.com/guides/integration/angular)
