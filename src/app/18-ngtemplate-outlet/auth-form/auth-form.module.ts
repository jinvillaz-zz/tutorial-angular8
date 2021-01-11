import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@NgModule({
  declarations: [
    AuthRememberComponent,
    AuthFormComponent,
    AuthMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AuthRememberComponent,
    AuthFormComponent,
  ],
})
export class AuthFormModule {}
