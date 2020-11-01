import { NgModule } from '@angular/core';
import { AuthForm1Module } from './auth-form/auth-form1.module';
import { AppRoutingModule02, routingComponents02 } from './02.routing.module';

@NgModule({
  declarations: [
    routingComponents02
  ],
  imports: [
    AuthForm1Module,
    AppRoutingModule02
  ],
  exports: [
  ]
})
export class Module02 { }
