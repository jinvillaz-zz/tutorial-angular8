import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component02 } from './02.component';

const routes: Routes = [
  { path: '02-injection-slots', component: Component02 }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule02 { }
export const routingComponents02 = [
  Component02
];
