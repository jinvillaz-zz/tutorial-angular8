import { NgModule } from '@angular/core';
import { AuthFormModule07 } from './auth-form/auth-form.module';
import { AppRoutingModule07, routingComponents07 } from './07.routing.module';

@NgModule({
  declarations: [
    routingComponents07
  ],
  imports: [
    AuthFormModule07,
    AppRoutingModule07
  ],
  exports: [
  ]
})
export class Module07 { }
