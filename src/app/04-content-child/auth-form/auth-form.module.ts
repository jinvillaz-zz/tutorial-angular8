import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm04Component } from './auth-form.component';
import { AuthRemember04Component } from './auth-remember.component';

@NgModule({
  declarations: [
    AuthRemember04Component,
    AuthForm04Component,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthRemember04Component,
    AuthForm04Component,
  ]
})
export class AuthFormModule04 {}
