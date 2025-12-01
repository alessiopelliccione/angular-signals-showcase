import {Component, signal, ChangeDetectionStrategy} from '@angular/core';
import {form, Field, required, email} from '@angular/forms/signals';

@Component({
	selector: 'app-root',
	templateUrl: 'app.html',
	styleUrl: 'app.css',
	imports: [Field],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App {

}