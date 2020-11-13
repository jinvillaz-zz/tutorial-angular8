import { NgModule } from '@angular/core';
import { AuthFormModule05 } from './auth-form/auth-form.module';
import { AppRoutingModule05, routingComponents05 } from './05.routing.module';

@NgModule({
  declarations: [
    routingComponents05
  ],
  imports: [
    AuthFormModule05,
    AppRoutingModule05
  ],
  exports: [
  ]
})
export class Module05 { }
