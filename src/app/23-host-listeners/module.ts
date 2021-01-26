import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule, routingComponents } from './routing.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';


@NgModule({
  declarations: [
    routingComponents,
    CreditCardDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class Module {}
