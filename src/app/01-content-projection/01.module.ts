import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthFormModule } from './auth-form/auth-form.module';
import { AppRoutingModule01, routingComponents01 } from './01.routing.module';

@NgModule({
  declarations: [
    routingComponents01
  ],
  imports: [
    CommonModule,
    AuthFormModule,
    AppRoutingModule01
  ],
  exports: [
  ]
})
export class Module01 { }
