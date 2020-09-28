import { NgModule } from '@angular/core';
import { AuthFormModule1 } from './auth-form/auth-form.module1';
import { AppRoutingModule02, routingComponents02 } from './02.routing.module';

@NgModule({
  declarations: [
    routingComponents02
  ],
  imports: [
    AuthFormModule1,
    AppRoutingModule02
  ],
  exports: [
    // AuthFormModule1
  ]
})
export class Module02 { }
