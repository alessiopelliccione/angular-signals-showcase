Use the `hidden()` signal with `@if` to show or hide fields conditionally:

```typescript
import { Component, signal } from '@angular/core'
import { form, Field, hidden } from '@angular/forms/signals'
@Component({
  selector: 'app-order',
  imports: [Field],
  template: `
    <label>
      <input type="checkbox" [field]="orderForm.requiresShipping" />
      Requires shipping
    </label>
    @if (!orderForm.shippingAddress().hidden()) {
      <label>
        Shipping Address
        <input [field]="orderForm.shippingAddress" />
      </label>
    }
  `
})
export class Order {
  orderModel = signal({
    requiresShipping: false,
    shippingAddress: ''
  })
  orderForm = form(this.orderModel, schemaPath => {
    hidden(schemaPath.shippingAddress, ({valueOf}) => !valueOf(schemaPath.requiresShipping))
  })
}
```

Hidden fields don't participate in validation, allowing the form to be submitted even if the hidden field would otherwise be invalid.

