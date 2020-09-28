import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent1 } from './auth-form.component1';

@NgModule({
  declarations: [
    AuthFormComponent1
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent1
  ]
})
export class AuthFormModule1 { }
