import { Component, ChangeDetectorRef, Output, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList,
   AfterContentInit, ElementRef, ViewChild } from '@angular/core';

import { AuthRemember09Component } from './auth-remember.component';
import { AuthMessage09Component } from './auth-message.component';
import { User09 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form09',
  styles: [`.email { border-color: #9f72e6!important; }`],
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
        <ng-content select="app-auth-remember09"></ng-content>
        <app-auth-message09
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </app-auth-message09>
        <ng-content select="button" class="space"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm09Component implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessage09Component) message: QueryList<AuthMessage09Component>;

  @ContentChildren(AuthRemember09Component) remember: QueryList<AuthRemember09Component>;

  @Output() submitted: EventEmitter<User09> = new EventEmitter<User09>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute('placeHolder', 'Enter your email address');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();
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

  onSubmit(value: User09): void {
    this.submitted.emit(value);
  }

}
