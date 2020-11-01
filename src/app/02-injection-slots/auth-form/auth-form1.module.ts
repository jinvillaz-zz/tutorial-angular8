import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm1Component } from './auth-form1.component';

@NgModule({
  declarations: [
    AuthForm1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthForm1Component
  ]
})
export class AuthForm1Module { }
