# Signal Forms: The Modern Way to Build Forms in Angular

A comprehensive showcase demonstrating how to build reactive forms in Angular 21 using Signals. This monorepo includes a presentation website and multiple Angular playground examples.

**Author**: Alessio Pelliccione

## 📦 Project Structure

```
angular-signals-showcase/
├── showcase/                      # React presentation website
│   ├── src/
│   ├── public/
│   └── package.json
├── playground/                    # Angular 21 examples
│   ├── signal-forms-auth/         # Login/signup form with dynamic validation
│   └── signal-contacts-form/      # Dynamic array management with CRUD
├── package.json                   # Root monorepo configuration
└── README.md                      # This file
```

## 🚀 Getting Started

### Install Dependencies

From the root directory:

```bash
npm install
```

This will install dependencies for all workspaces (showcase and playground projects).

### Run the Showcase Website

```bash
npm run showcase:dev
```

The showcase website will be available at `http://localhost:8081/`

### Build the Showcase

```bash
npm run showcase:build
```

### Preview Production Build

```bash
npm run showcase:preview
```

## 📂 Workspaces

### Showcase (`/showcase`)

React + TypeScript presentation website built with:
- **Vite** - Fast build tool
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

The showcase provides:
- Introduction to Signals in Angular
- What are Signal Forms
- Why they matter (performance, boilerplate, clarity, testing)
- Live coding demonstrations with StackBlitz integration
- Architecture tips and best practices

### Playground (`/playground`)

Complete Angular 21 project demonstrating Signal Forms patterns:

1. **signal-forms-auth**: Login/signup toggle form with dynamic validators

## 🎯 Showcase Sections

1. **What Are Signals** - Introduction to Angular Signals
2. **What Are Signal Forms** - Applying Signals to forms
3. **Why Signal Forms** - Benefits and comparisons
4. **Let's Build Together** - StackBlitz example with step-by-step learning
5. **Validators & Field State** - Common validators and field state signals

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run showcase:dev` | Start showcase dev server |
| `npm run showcase:build` | Build showcase for production |
| `npm run showcase:preview` | Preview production build |
| `npm run dev:auth-form` | Run login/signup form example |
| `npm run install:all` | Install all workspace dependencies |
| `npm run clean` | Remove all node_modules |

## 📝 Adding Playground Projects

To add a new Angular playground project:

1. Create a new Angular project in the `playground/` directory:
   ```bash
   cd playground
   ng new my-signal-forms-example
   ```

2. The project will automatically be part of the workspace

3. Push to GitHub and open in StackBlitz during the presentation

## 🎨 Tech Stack

### Showcase Website
- React 18
- TypeScript 5
- Vite
- Tailwind CSS
- shadcn/ui

### Playground
- Angular 21+
- TypeScript 5
- Signal Forms (experimental)

## 🌟 Features

- **StackBlitz Integration**: One-click access to live example
- **Complete Auth Form Example**: Login/signup form with dynamic validators
- **Zoneless Angular 21**: Modern change detection patterns
- **Responsive Design**: Works on all screen sizes
- **Type-Safe**: Full TypeScript support
- **Professional Theme**: Light theme optimized for presentations

## 📚 Resources

- [Angular Signals Documentation](https://angular.dev/guide/signals)
- [Angular Signals Forms](https://angular.dev/guide/forms/signals/overview)
- [StackBlitz Examples](https://stackblitz.com/@alessiopelliccione)

## 📄 License

MIT License - Copyright (c) 2025 Alessio Pelliccione

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
