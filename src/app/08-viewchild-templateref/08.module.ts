import { NgModule } from '@angular/core';
import { AuthFormModule08 } from './auth-form/auth-form.module';
import { AppRoutingModule08, routingComponents08 } from './08.routing.module';

@NgModule({
  declarations: [
    routingComponents08
  ],
  imports: [
    AuthFormModule08,
    AppRoutingModule08
  ],
  exports: [
  ]
})
export class Module08 { }
