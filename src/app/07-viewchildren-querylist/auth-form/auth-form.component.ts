import { Component, ChangeDetectorRef, Output, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList,
   AfterContentInit } from '@angular/core';

import { AuthRemember07Component } from './auth-remember.component';
import { AuthMessage07Component } from './auth-message.component';
import { User07 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form07',
  template: `
    <div style="width: 320px;">
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
        <ng-content select="app-auth-remember07"></ng-content>
        <app-auth-message07
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </app-auth-message07>
        <app-auth-message07
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </app-auth-message07>
        <app-auth-message07
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </app-auth-message07>
        <ng-content select="button" class="space"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm07Component implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChildren(AuthMessage07Component) message: QueryList<AuthMessage07Component>; // angular 4 doesn't need the property static: true

  @ContentChildren(AuthRemember07Component) remember: QueryList<AuthRemember07Component>;

  @Output() submitted: EventEmitter<User07> = new EventEmitter<User07>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges(); // To avoid error on changes
    }
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
    }
  }

  onSubmit(value: User07): void {
    this.submitted.emit(value);
  }

}
