import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm06Component } from './auth-form.component';
import { AuthRemember06Component } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@NgModule({
  declarations: [
    AuthRemember06Component,
    AuthForm06Component,
    AuthMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AuthRemember06Component,
    AuthForm06Component,
  ]
})
export class AuthFormModule06 {}
