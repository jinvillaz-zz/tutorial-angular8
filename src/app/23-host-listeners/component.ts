import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-23',
  template: `
    <div class="main-container">
      <label>
        Credit Card Number
        <input
          name="credit-card"
          type="text"
          placeholder="Enter your 16-digit card number"
          appCreditCard>
      </label>
    </div>
  `,
  styleUrls: ['./component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
