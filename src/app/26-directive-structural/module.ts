import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule, routingComponents } from './routing.module';
import { MyForDirective } from './my-for/my-for.directive';


@NgModule({
  declarations: [
    routingComponents,
    MyForDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class Module {}
