import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { App09Component } from './09.component';

const routes: Routes = [
  { path: '', component: App09Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule09 { }
export const routingComponents09 = [
  App09Component
];
