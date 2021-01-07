import { NgModule } from '@angular/core';
import { AuthFormModule10 } from './auth-form/auth-form.module';
import { AppRoutingModule10, routingComponents10 } from './10.routing.module';

@NgModule({
  declarations: [
    routingComponents10
  ],
  imports: [
    AuthFormModule10,
    AppRoutingModule10
  ],
  exports: [
  ]
})
export class Module10 { }
