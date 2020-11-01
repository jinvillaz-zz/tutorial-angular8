import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { App03Component } from './03.component';

const routes: Routes = [
  { path: '', component: App03Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule03 { }
export const routingComponents03 = [
  App03Component
];
