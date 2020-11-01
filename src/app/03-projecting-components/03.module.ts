import { NgModule } from '@angular/core';
import { AuthFormModule03 } from './auth-form/auth-form.module';
import { AppRoutingModule03, routingComponents03 } from './03.routing.module';

@NgModule({
  declarations: [
    routingComponents03
  ],
  imports: [
    AuthFormModule03,
    AppRoutingModule03
  ],
  exports: [
  ]
})
export class Module03 { }
