import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm09Component } from './auth-form.component';
import { AuthRemember09Component } from './auth-remember.component';
import { AuthMessage09Component } from './auth-message.component';

@NgModule({
  declarations: [
    AuthRemember09Component,
    AuthForm09Component,
    AuthMessage09Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AuthRemember09Component,
    AuthForm09Component,
  ]
})
export class AuthFormModule09 {}
