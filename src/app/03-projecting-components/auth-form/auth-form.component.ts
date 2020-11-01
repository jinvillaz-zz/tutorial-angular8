import { Component, Output, EventEmitter } from '@angular/core';

import { User03 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form03',
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
        <ng-content select="app-auth-remember"></ng-content>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<User03> = new EventEmitter<User03>();

  onSubmit(value: User03): void {
    this.submitted.emit(value);
  }

}
