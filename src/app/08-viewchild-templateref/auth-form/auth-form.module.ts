import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm08Component } from './auth-form.component';
import { AuthRemember08Component } from './auth-remember.component';
import { AuthMessage08Component } from './auth-message.component';

@NgModule({
  declarations: [
    AuthRemember08Component,
    AuthForm08Component,
    AuthMessage08Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AuthRemember08Component,
    AuthForm08Component,
  ]
})
export class AuthFormModule08 {}
