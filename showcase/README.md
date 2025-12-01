# Signal Forms Showcase

A modern React-based presentation website showcasing Angular Signal Forms patterns and best practices.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The showcase will be available at `http://localhost:8081/`

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript 5** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## 📋 Sections

The showcase includes the following sections:

1. **Hero** - Introduction and event information
2. **What Are Signals** - Explanation of Angular Signals
3. **What Are Signal Forms** - Introduction to Signal Forms
4. **Why Signal Forms** - Benefits and comparisons
5. **Let's Build Together** - Three StackBlitz examples:
   - Login/Signup Form
   - Dynamic Contacts Form
   - Advanced Validation
6. **Architecture Tips** - Best practices and patterns

## 🎨 Design

- **Professional Theme**: Light theme optimized for presentations
- **Dark Blue Primary**: Professional color scheme (HSL: 222, 47%, 25%)
- **Angular Gradient**: Red-to-blue gradient in hero section
- **Responsive**: Mobile-first design
- **Smooth Navigation**: Fixed header with smooth scrolling

## 🧩 Components

```
src/components/
├── Header.tsx              # Navigation bar
├── Hero.tsx                # Hero section with title
├── WhatAreSignals.tsx      # Signals introduction
├── WhatAreSignalForms.tsx  # Signal Forms explanation
├── WhySignalForms.tsx      # Benefits comparison
├── LiveCoding.tsx          # StackBlitz examples
├── ArchitectureTips.tsx    # Best practices
└── ui/                     # shadcn/ui components
```

## 📝 Configuration

### Tailwind Colors

Primary color is configured in `src/index.css`:

```css
--primary: 222 47% 25%; /* Dark blue */
```

### Vite Config

Development server runs on port 8081 (configured in `vite.config.ts`).

## 🔧 Development

The project uses:
- **ESLint** for code quality
- **TypeScript** for type checking
- **PostCSS** with Tailwind
- **Path aliases** (@/ points to src/)

## 📦 Build

```bash
npm run build
```

Output directory: `dist/`

## 🌐 Deployment

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
