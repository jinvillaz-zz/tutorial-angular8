import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule, routingComponents } from './routing.module';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
  declarations: [
    routingComponents,
    CreditCardDirective,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class Module {}
