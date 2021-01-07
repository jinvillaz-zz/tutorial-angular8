import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { App10Component } from './10.component';

const routes: Routes = [
  { path: '', component: App10Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule10 { }
export const routingComponents10 = [
  App10Component
];
