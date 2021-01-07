import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'app-auth-form',
  styles: [`.email { border-color: #9f72e6!important; }`],
  template: `
    <div style="width: 320px;">
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3> {{ title }} </h3>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button type="submit">
          {{ title }}
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthFormComponent {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }

}
