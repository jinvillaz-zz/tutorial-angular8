import { NgModule } from '@angular/core';
import { AuthFormModule09 } from './auth-form/auth-form.module';
import { AppRoutingModule09, routingComponents09 } from './09.routing.module';

@NgModule({
  declarations: [
    routingComponents09
  ],
  imports: [
    AuthFormModule09,
    AppRoutingModule09
  ],
  exports: [
  ]
})
export class Module09 { }
