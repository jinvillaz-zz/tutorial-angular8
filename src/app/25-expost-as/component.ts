import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-25',
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
      <label
        appTooltip="3 digits, back of your card"
        #myTooltip="appTooltip">
        Enter your security code
        <span
          (mouseover)="myTooltip.show()"
          (mouseout)="myTooltip.hide()">
          (?)
        </span>
        <input type="text">
      </label>
    </div>
  `,
  styleUrls: ['./component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
