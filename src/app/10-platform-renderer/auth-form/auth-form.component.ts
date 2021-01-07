import { Component, Renderer2, ChangeDetectorRef, Output, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, 
  QueryList, AfterContentInit, ElementRef, ViewChild } from '@angular/core';

import { AuthRemember10Component } from './auth-remember.component';
import { AuthMessage10Component } from './auth-message.component';
import { User10 } from './auth-form.interface';

@Component({
  selector: 'app-auth-form10',
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
        <ng-content select="app-auth-remember10"></ng-content>
        <app-auth-message10
          [style.display]="(showMessage ? 'inherit' : 'none')">
        </app-auth-message10>
        <ng-content select="button" class="space"></ng-content>
      </form>
    </div>
  `,
  styleUrls: ['./auth-form.scss']
})
export class AuthForm10Component implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessage10Component) message: QueryList<AuthMessage10Component>;

  @ContentChildren(AuthRemember10Component) remember: QueryList<AuthRemember10Component>;

  @Output() submitted: EventEmitter<User10> = new EventEmitter<User10>();

  constructor(private renderer: Renderer2, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    /* this.email.nativeElement.setAttribute('placeHolder', 'Enter your email address');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus(); */
    // it's better to use renderer because is agnostic for web or mobile.
    this.renderer.setAttribute(this.email.nativeElement, 'placeHolder', 'Enter your email address');
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.renderer.selectRootElement(this.email.nativeElement).focus();
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

  onSubmit(value: User10): void {
    this.submitted.emit(value);
  }

}
