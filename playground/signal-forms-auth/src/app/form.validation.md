```typescript
import {Component, signal, ChangeDetectionStrategy} from '@angular/core';
import {form, Field, required, email} from '@angular/forms/signals';

interface LoginData {
	email: string;
	password: string;
}

@Component({
	selector: 'app-root',
	templateUrl: 'app.html',
	styleUrl: 'app.css',
	imports: [Field],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App {

	loginModel = signal<LoginData>({
		email: '',
		password: '',
	});

	loginForm = form(this.loginModel, (schemaPath) => {
		required(schemaPath.email, {message: 'Email is required'});
		email(schemaPath.email, {message: 'Enter a valid email address'});
		required(schemaPath.password, {message: 'Password is required'});
	});

	onSubmit(event: Event) {
		event.preventDefault();
		// Perform login logic here
		const credentials = this.loginModel();
		console.log('Logging in with:', credentials);
		// e.g., await this.authService.login(credentials);
	}

}
```

```html
<form (submit)="onSubmit($event)">
  <div>
    <label>
      Email:
      <input type="email" [field]="loginForm.email" />
    </label>
    @if (loginForm.email().touched() && loginForm.email().invalid()) {
      <ul class="error-list">
        @for (error of loginForm.email().errors(); track error) {
          <li>{{ error.message }}</li>
        }
      </ul>
    }
  </div>
  <div>
    <label>
      Password:
      <input type="password" [field]="loginForm.password" />
    </label>
    @if (loginForm.password().touched() && loginForm.password().invalid()) {
      <div class="error-list">
        @for (error of loginForm.password().errors(); track error) {
          <p>{{ error.message }}</p>
        }
      </div>
    }
  </div>
  <button type="submit">Log In</button>
</form>
```