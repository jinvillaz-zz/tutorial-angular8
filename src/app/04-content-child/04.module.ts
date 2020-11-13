import { NgModule } from '@angular/core';
import { AuthFormModule04 } from './auth-form/auth-form.module';
import { AppRoutingModule04, routingComponents04 } from './04.routing.module';

@NgModule({
  declarations: [
    routingComponents04
  ],
  imports: [
    AuthFormModule04,
    AppRoutingModule04
  ],
  exports: [
  ]
})
export class Module04 { }
