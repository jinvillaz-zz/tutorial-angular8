import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomeComponent },
  { path: '01-content-projection', loadChildren: () => import('./01-content-projection/01.module').then(m => m.Module01) },
  { path: '02-injection-slots', loadChildren: () => import('./02-injection-slots/02.module').then(m => m.Module02) },
  { path: '03-projecting-components', loadChildren: () => import('./03-projecting-components/03.module').then(m => m.Module03) },
  // { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent
];
