import { NgModule } from '@angular/core';
import { AuthFormModule } from './auth-form/auth-form.module';
import { AppRoutingModule, routingComponents } from './routing.module';

@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    AuthFormModule,
    AppRoutingModule
  ],
  exports: [
  ]
})
export class Module { }
