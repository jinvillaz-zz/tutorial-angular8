import { NgModule } from '@angular/core';
import { AuthFormModule } from './auth-form/auth-form.module';
import { AppRoutingModule01, routingComponents01 } from './01.routing.module';

@NgModule({
  declarations: [
    routingComponents01
  ],
  imports: [
    AuthFormModule,
    AppRoutingModule01
  ],
  exports: [
    AuthFormModule
  ]
})
export class Module01 { }
