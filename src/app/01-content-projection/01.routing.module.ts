import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App01Component } from './01.component';

const routes: Routes = [
  { path: '', component: App01Component }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule01 { }
export const routingComponents01 = [
  App01Component
];
