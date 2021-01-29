import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule, routingComponents } from './routing.module';
import { FileSizePipe } from './filesize.pipe';


@NgModule({
  declarations: [
    routingComponents,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class Module {}
