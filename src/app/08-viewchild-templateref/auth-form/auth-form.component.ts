import { Component, ChangeDetectorRef, Output, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList,
   AfterContentInit, ElementRef, ViewChild } from '@angular/core';

import { AuthRemember08Component } from './auth-remember.component';
import { AuthMessage08Component } from './auth-message.component';
import { User08 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form08',
  template: `
    <div style="width: 320px;">
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="app-auth-remember08"></ng-content>
        <app-auth-message08
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </app-auth-message08>
        <ng-content select="button" class="space"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm08Component implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessage08Component) message: QueryList<AuthMessage08Component>;

  @ContentChildren(AuthRemember08Component) remember: QueryList<AuthRemember08Component>;

  @Output() submitted: EventEmitter<User08> = new EventEmitter<User08>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    console.log(this.email);
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

  onSubmit(value: User08): void {
    this.submitted.emit(value);
  }

}
