import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm03Component } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';

@NgModule({
  declarations: [
    AuthForm03Component,
    AuthRememberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthForm03Component,
    AuthRememberComponent
  ]
})
export class AuthFormModule03 {}
