import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule, routingComponents } from './routing.module';

@NgModule({
  declarations: [
    routingComponents,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class Module { }
