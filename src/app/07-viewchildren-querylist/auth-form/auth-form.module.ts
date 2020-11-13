import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm07Component } from './auth-form.component';
import { AuthRemember07Component } from './auth-remember.component';
import { AuthMessage07Component } from './auth-message.component';

@NgModule({
  declarations: [
    AuthRemember07Component,
    AuthForm07Component,
    AuthMessage07Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AuthRemember07Component,
    AuthForm07Component,
  ]
})
export class AuthFormModule07 {}
