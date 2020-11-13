import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';

import { AuthRemember04Component } from './auth-remember.component';

import { User04 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form04',
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
        <ng-content select="app-auth-remember04"></ng-content>
        <br>
        <div *ngIf="showMessage" class="space">
          You will be logged in for 30 days
        </div>
        <ng-content select="button" class="space"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm04Component implements AfterContentInit {

  showMessage: boolean;

  @ContentChild(AuthRemember04Component) remember: AuthRemember04Component;

  @Output() submitted: EventEmitter<User04> = new EventEmitter<User04>();

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
    }
  }

  onSubmit(value: User04): void {
    this.submitted.emit(value);
  }

}
