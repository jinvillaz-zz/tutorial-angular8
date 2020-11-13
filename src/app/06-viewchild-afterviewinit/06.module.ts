import { NgModule } from '@angular/core';
import { AuthFormModule06 } from './auth-form/auth-form.module';
import { AppRoutingModule06, routingComponents06 } from './06.routing.module';

@NgModule({
  declarations: [
    routingComponents06
  ],
  imports: [
    AuthFormModule06,
    AppRoutingModule06
  ],
  exports: [
  ]
})
export class Module06 { }
