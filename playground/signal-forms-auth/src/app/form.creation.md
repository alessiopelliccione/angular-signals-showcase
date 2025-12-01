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

	loginForm = form(this.loginModel);

}
```

```html
<form>
  <label>
    Email:
    <input type="email" [field]="loginForm.email" />
  </label>
  <label>
    Password:
    <input type="password" [field]="loginForm.password" />
  </label>
  <p>Hello {{ loginForm.email().value() }}!</p>
  <p>Password length: {{ loginForm.password().value().length }}</p>
</form>
```