import { Component, Output, ViewChild, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AuthRemember06Component } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
import { User06 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form06',
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
        <ng-content select="app-auth-remember06"></ng-content>
        <app-auth-message
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </app-auth-message>
        <ng-content select="button" class="space"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm06Component implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild(AuthMessageComponent, { static: true }) message: AuthMessageComponent; // angular 4 doesn't need the property static: true

  @ContentChildren(AuthRemember06Component) remember: QueryList<AuthRemember06Component>;

  @Output() submitted: EventEmitter<User06> = new EventEmitter<User06>();

  ngAfterViewInit(): void {
    // this.message.days = 30; Angular 4 throw a error
  }

  ngAfterContentInit(): void {
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User06): void {
    this.submitted.emit(value);
  }

}
