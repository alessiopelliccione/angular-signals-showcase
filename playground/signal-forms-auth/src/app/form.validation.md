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

---

Common validators include:

`required()` - Ensures the field has a value
`email()` - Validates email format
`min()` / `max()` - Validates number ranges
`minLength()` / `maxLength()` - Validates string or collection length
`pattern()` - Validates against a regex pattern

--- 

Every `field()` provides these state signals:

| State | Description |
|-------|-------------|
| `valid()` | Returns true if the field passes all validation rules |
| `touched()` | Returns true if the user has focused and blurred the field |
| `dirty()` | Returns true if the user has changed the value |
| `disabled()` | Returns true if the field is disabled |
| `readonly()` | Returns true if the field is readonly |
| `pending()` | Returns true if async validation is in progress |
| `errors()` | Returns an array of validation errors with kind and message properties |