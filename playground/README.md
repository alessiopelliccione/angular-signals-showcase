# Playground - Angular Signal Forms Examples

This directory contains three complete Angular 21 projects demonstrating Signal Forms patterns and best practices.

## 📁 Projects

### 1. signal-forms-auth

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
- Toggle between different form modes
- Implementing form validation with signals
- Dynamic validator configuration

---

### 2. signal-contacts-form

**Dynamic Contacts Form with CRUD Operations**

- Add, remove, and reorder contacts
- Bi-directional data synchronization (UI ↔ Model)
- Simulated server fetch/patch operations
- Dynamic array management with signals

```bash
npm run dev:contacts-form
```

[Open in StackBlitz](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-contacts-form) | [View Code](./signal-contacts-form)

**What you'll learn:**
- Managing arrays with signals (add, remove, reorder)
- Bi-directional sync: UI ↔ Model
- Using @for with track for dynamic lists
- Simulating server fetch/patch operations
- Why this is simpler than FormArray

---

### 3. signal-validation-form

**Advanced Validation Patterns**

- Async validators for API calls (username uniqueness)
- Cross-field validation (password matching)
- Conditional validation (VAT required for companies)
- Form state tracking (pending, touched, dirty, valid)

```bash
npm run dev:validation-form
```

[Open in StackBlitz](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-validation-form) | [View Code](./signal-validation-form)

**What you'll learn:**
- Async validators for API calls
- Cross-field validation
- Conditional validation
- Form state tracking
- Clean error handling with typed error keys

---

## 🚀 Running Examples Locally

All examples can be run from the root directory:

```bash
# From root directory
npm run dev:auth-form
npm run dev:contacts-form
npm run dev:validation-form
```

Each example will open automatically at `http://localhost:4200/`

## 🌐 Opening in StackBlitz

Each project includes a StackBlitz link for online editing and sharing. Click the "Open in StackBlitz" badges in each project's README or use:

```bash
cd playground/signal-forms-auth
npm run stackblitz
```

## 🛠️ Technologies

All playground projects use:
- **Angular 21** - Latest version with zoneless change detection
- **TypeScript 5.9** - Strict mode enabled
- **Reactive Forms** - Angular's form API
- **Signals** - For reactive state management
- **Standalone Components** - No NgModule needed

## 📝 Project Structure

Each project follows a minimal structure:

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
