import { Component, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRemember05Component } from './auth-remember.component';

import { User05 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form05',
  template: `
    <div style="width: 270px;">
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
        <ng-content select="app-auth-remember05"></ng-content>
        <div *ngIf="showMessage" class="space">
          You will be logged in for 30 days
        </div>
        <ng-content select="button" class="space"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm05Component implements AfterContentInit {

  showMessage: boolean;

  @ContentChildren(AuthRemember05Component) remember: QueryList<AuthRemember05Component>;

  @Output() submitted: EventEmitter<User05> = new EventEmitter<User05>();

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User05): void {
    this.submitted.emit(value);
  }

}
