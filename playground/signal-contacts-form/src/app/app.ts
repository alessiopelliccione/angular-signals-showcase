import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Contact interface
interface Contact {
  id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  styleUrl: './app.css',
  template: `
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>Dynamic Contacts Form</h1>
        <p class="subtitle">Signal-based reactive form with array management</p>
      </div>

      <!-- Action buttons -->
      <div class="actions">
        <button class="btn btn-primary" (click)="addContact()">
          ➕ Add Contact
        </button>
        <button class="btn btn-secondary" (click)="loadSampleData()">
          📥 Load Sample Data
        </button>
        <button class="btn btn-secondary" (click)="clearAll()">
          🗑️ Clear All
        </button>
      </div>

      <!-- Loading state -->
      @if (loading()) {
        <div class="loading">
          ⏳ Loading contacts...
        </div>
      }

      <!-- Contacts list -->
      @if (!loading() && contacts().length > 0) {
        <div class="contacts-list">
          @for (contact of contacts(); track contact.id; let i = $index) {
            <div class="contact-card">
              <!-- Contact header with controls -->
              <div class="contact-header">
                <span class="contact-id">ID: {{ contact.id }}</span>
                <div class="contact-controls">
                  <button
                    class="btn-icon"
                    (click)="moveUp(i)"
                    [disabled]="i === 0"
                    title="Move up"
                  >
                    ⬆️
                  </button>
                  <button
                    class="btn-icon"
                    (click)="moveDown(i)"
                    [disabled]="i === contacts().length - 1"
                    title="Move down"
                  >
                    ⬇️
                  </button>
                  <button
                    class="btn-icon"
                    (click)="removeContact(i)"
                    title="Remove"
                  >
                    ❌
                  </button>
                </div>
              </div>

              <!-- Contact form fields -->
              <div class="form-fields">
                <div class="form-group">
                  <label for="name-{{i}}">Name</label>
                  <input
                    id="name-{{i}}"
                    type="text"
                    [(ngModel)]="contact.name"
                    placeholder="Enter name"
                    (ngModelChange)="onFieldChange()"
                  />
                  @if (contact.name.length === 0) {
                    <span class="error">Name is required</span>
                  }
                </div>

                <div class="form-group">
                  <label for="email-{{i}}">Email</label>
                  <input
                    id="email-{{i}}"
                    type="email"
                    [(ngModel)]="contact.email"
                    placeholder="Enter email"
                    [class.invalid]="!isEmailValid(contact.email) && contact.email.length > 0"
                    (ngModelChange)="onFieldChange()"
                  />
                  @if (contact.email.length === 0) {
                    <span class="error">Email is required</span>
                  } @else if (!isEmailValid(contact.email)) {
                    <span class="error">Invalid email format</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      }

      <!-- Empty state -->
      @if (!loading() && contacts().length === 0) {
        <div class="empty-state">
          <div class="empty-state-icon">📭</div>
          <p>No contacts yet. Click "Add Contact" to get started!</p>
        </div>
      }

      <!-- Model summary -->
      @if (contacts().length > 0) {
        <div class="summary">
          <h3>📊 Model State ({{ validCount() }}/{{ contacts().length }} valid)</h3>
          <div class="summary-content">{{ contactsJson() }}</div>
        </div>
      }
    </div>
  `,
})
export class App {
  // Signal holding the contacts array - this is the "model"
  protected contacts = signal<Contact[]>([]);

  // Loading state signal
  protected loading = signal(false);

  // Computed: JSON representation of contacts for debugging
  protected contactsJson = computed(() =>
    JSON.stringify(this.contacts(), null, 2)
  );

  // Computed: count of valid contacts
  protected validCount = computed(() =>
    this.contacts().filter(c =>
      c.name.length > 0 && this.isEmailValid(c.email)
    ).length
  );

  constructor() {
    // Simulate automatic data loading after 2 seconds
    setTimeout(() => {
      console.log('🔄 Auto-loading sample data after 2s...');
      this.loadSampleData();
    }, 2000);
  }

  /**
   * Add a new empty contact to the array
   */
  addContact(): void {
    const newContact: Contact = {
      id: this.generateId(),
      name: '',
      email: ''
    };

    // Update signal by creating a new array with the new contact
    this.contacts.update(current => [...current, newContact]);
    console.log('➕ Added new contact:', newContact);
  }

  /**
   * Remove contact at specified index
   */
  removeContact(index: number): void {
    const removed = this.contacts()[index];
    this.contacts.update(current =>
      current.filter((_, i) => i !== index)
    );
    console.log('🗑️ Removed contact:', removed);
  }

  /**
   * Move contact up in the list
   */
  moveUp(index: number): void {
    if (index === 0) return;

    this.contacts.update(current => {
      const newArray = [...current];
      [newArray[index - 1], newArray[index]] = [newArray[index], newArray[index - 1]];
      return newArray;
    });
    console.log('⬆️ Moved contact up from index', index);
  }

  /**
   * Move contact down in the list
   */
  moveDown(index: number): void {
    if (index === this.contacts().length - 1) return;

    this.contacts.update(current => {
      const newArray = [...current];
      [newArray[index], newArray[index + 1]] = [newArray[index + 1], newArray[index]];
      return newArray;
    });
    console.log('⬇️ Moved contact down from index', index);
  }

  /**
   * Clear all contacts
   */
  clearAll(): void {
    this.contacts.set([]);
    console.log('🗑️ Cleared all contacts');
  }

  /**
   * Simulate fetching data from a server
   * This demonstrates how updating the signal programmatically
   * automatically updates the UI
   */
  loadSampleData(): void {
    this.loading.set(true);

    // Simulate API call with timeout
    setTimeout(() => {
      const sampleContacts: Contact[] = [
        {
          id: this.generateId(),
          name: 'Alice Johnson',
          email: 'alice@example.com'
        },
        {
          id: this.generateId(),
          name: 'Bob Smith',
          email: 'bob@example.com'
        },
        {
          id: this.generateId(),
          name: 'Carol Williams',
          email: 'carol@example.com'
        }
      ];

      // Simply set the signal to the new data - UI updates automatically!
      this.contacts.set(sampleContacts);
      this.loading.set(false);

      console.log('📥 Loaded sample data:', sampleContacts);
    }, 1000);
  }

  /**
   * Called when any field changes
   * This demonstrates bi-directional sync: UI -> Model
   */
  onFieldChange(): void {
    // The signal is already updated via [(ngModel)]
    // We just need to trigger any side effects if needed
    console.log('✏️ Field changed, current state:', this.contacts());
  }

  /**
   * Email validation helper
   */
  isEmailValid(email: string): boolean {
    if (email.length === 0) return true; // Empty is handled separately
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Generate a unique ID for contacts
   */
  private generateId(): string {
    return `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}
