# Angular 21 - Dynamic Contacts Form with Signals

A demonstration of **Signal-based reactive forms** in Angular 21 showcasing dynamic array management with full CRUD operations and bi-directional data synchronization.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-contacts-form)

## 🎯 Objective

This demo shows how to build a **dynamic form with an array of items** using Angular Signals, featuring:
- Dynamic contact list with `{ id, name, email }` objects
- Add, remove, and reorder contacts (move up/down)
- **Bi-directional synchronization**: Update the signal model programmatically (simulating fetch/patch) and the UI updates automatically; update the UI and the model changes
- Inline validation for email format

## ✨ Features

- **Signal-based state management** - No need for complex FormArray
- **Dynamic array manipulation** - Add, remove, reorder items effortlessly
- **Bi-directional sync** - Changes flow both ways: UI ↔ Model
- **Automatic data loading** - Simulates server fetch after 2 seconds
- **Real-time validation** - Email format and required field checks
- **Zoneless Angular 21** - Using `provideZonelessChangeDetection()`
- **Modern template syntax** - Uses `@if` and `@for` control flow

## 🛠 Technologies

- Angular 21
- TypeScript (strict mode)
- Signals API
- FormsModule with `[(ngModel)]`
- Standalone components
- Zoneless change detection

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

Or visit: [StackBlitz Link](https://stackblitz.com/github/alessiopelliccione/angular-signals-showcase/tree/main/playground/signal-contacts-form)

## 📖 How It Works

### Signal Model

The entire form state is managed by a single signal:

```typescript
protected contacts = signal<Contact[]>([]);
```

### Bi-Directional Sync

**Model → UI** (Programmatic updates):
```typescript
loadSampleData(): void {
  const sampleContacts = [/* ... */];
  this.contacts.set(sampleContacts); // UI updates automatically!
}
```

**UI → Model** (User input):
```typescript
<input [(ngModel)]="contact.name" (ngModelChange)="onFieldChange()" />
```

### Dynamic Template with @for

```typescript
@for (contact of contacts(); track contact.id; let i = $index) {
  <div class="contact-card">
    <input [(ngModel)]="contact.name" />
    <input [(ngModel)]="contact.email" />
    <button (click)="removeContact(i)">Remove</button>
  </div>
}
```

## 🎓 Why This Approach is Better than FormArray

### Traditional Reactive Forms with FormArray

```typescript
// ❌ Complex setup
this.contactsForm = this.fb.group({
  contacts: this.fb.array([])
});

// ❌ Verbose API
get contactsArray(): FormArray {
  return this.contactsForm.get('contacts') as FormArray;
}

// ❌ Manual creation
addContact() {
  this.contactsArray.push(this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  }));
}

// ❌ Complex template
<div formArrayName="contacts">
  <div *ngFor="let contact of contactsArray.controls; let i = index"
       [formGroupName]="i">
    <input formControlName="name" />
  </div>
</div>
```

### Signal-Based Approach

```typescript
// ✅ Simple state
protected contacts = signal<Contact[]>([]);

// ✅ Straightforward operations
addContact() {
  this.contacts.update(current => [...current, newContact]);
}

// ✅ Clean template
@for (contact of contacts(); track contact.id) {
  <input [(ngModel)]="contact.name" />
}
```

### Key Advantages

1. **Less Boilerplate** - No FormBuilder, FormArray, or complex setup
2. **More Intuitive** - Direct array manipulation instead of FormArray API
3. **Better Type Safety** - TypeScript types flow naturally
4. **Easier Testing** - Just test signal updates, no form mocking
5. **Reactive by Default** - Computed values automatically update
6. **Modern Angular** - Leverages the new Signals API

## 🔍 Code Structure

```
src/app/
├── app.config.ts  - Zoneless configuration
├── app.css        - Styling
└── app.ts         - Main component with Signal Forms logic
```

## 📋 Key Functions

- `addContact()` - Add new empty contact
- `removeContact(idx)` - Remove contact at index
- `moveUp(idx)` / `moveDown(idx)` - Reorder contacts
- `loadSampleData()` - Simulate server fetch (after 2s delay)
- `clearAll()` - Reset form
- `isEmailValid(email)` - Inline email validation

## 🎯 Acceptance Criteria

- ✅ Click "Add contact" → new field appears + signal model updated
- ✅ Click "Load Sample Data" → values populate automatically without manual patching
- ✅ Remove/reorder buttons update both UI and model
- ✅ Email validation shows inline error messages
- ✅ Model state visible in real-time debug panel

## 🏗 Built With

Angular CLI 21.0.1
