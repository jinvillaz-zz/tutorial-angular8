import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component01 } from './01.component';

const routes: Routes = [
  { path: '01-content-projection', component: Component01 }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    RouterModule.forRoot(routes)    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule01 { }
export const routingComponents01 = [
  Component01
];