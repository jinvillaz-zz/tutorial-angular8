import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule, routingComponents } from './routing.module';
import { ExampleOneComponent } from './one/one.component';
import { ExampleTwoComponent } from './two/two.component';
import { ExampleThreeComponent } from './three/three.component';


@NgModule({
  declarations: [
    routingComponents,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class Module { }
