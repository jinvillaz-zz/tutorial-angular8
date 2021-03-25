import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
import { AppRoutingModule, routingComponents } from './routing.module';

@NgModule({
  declarations: [
    routingComponents,
  ],
  imports: [
    CommonModule,
    StockInventoryModule,
    AppRoutingModule,
  ]
})
export class Module {}
