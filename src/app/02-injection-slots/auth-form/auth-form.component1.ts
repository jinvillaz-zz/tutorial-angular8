import { Component, Output, EventEmitter } from '@angular/core';

import { User1 } from './auth-form.interface1';

@Component({
  selector: 'auth-form1',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthFormComponent1 {

  @Output() submitted: EventEmitter<User1> = new EventEmitter<User1>();

  onSubmit(value: User1) {
    this.submitted.emit(value);
  }

}
