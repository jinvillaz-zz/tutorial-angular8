import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm05Component } from './auth-form.component';
import { AuthRemember05Component } from './auth-remember.component';

@NgModule({
  declarations: [
    AuthRemember05Component,
    AuthForm05Component,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthRemember05Component,
    AuthForm05Component,
  ]
})
export class AuthFormModule05 {}
