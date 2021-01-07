import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm10Component } from './auth-form.component';
import { AuthRemember10Component } from './auth-remember.component';
import { AuthMessage10Component } from './auth-message.component';

@NgModule({
  declarations: [
    AuthRemember10Component,
    AuthForm10Component,
    AuthMessage10Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AuthRemember10Component,
    AuthForm10Component,
  ],
})
export class AuthFormModule10 {}
