import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomeComponent },
  { path: '01-content-projection', loadChildren: () => import('./01-content-projection/01.module').then(m => m.Module01) },
  { path: '02-injection-slots', loadChildren: () => import('./02-injection-slots/02.module').then(m => m.Module02) },
  { path: '03-projecting-components', loadChildren: () => import('./03-projecting-components/03.module').then(m => m.Module03) },
  { path: '04-content-child-aftercontentinit', loadChildren: () => import('./04-content-child/04.module').then(m => m.Module04) },
  { path: '05-contentchildren-query', loadChildren: () => import('./05-contentchildren-query/05.module').then(m => m.Module05) },
  { path: '06-viewchild-afterviewinit', loadChildren: () => import('./06-viewchild-afterviewinit/06.module').then(m => m.Module06) },
  { path: '07-viewchildren-querylist', loadChildren: () => import('./07-viewchildren-querylist/07.module').then(m => m.Module07) },
  { path: '08-viewchild-templateref', loadChildren: () => import('./08-viewchild-templateref/08.module').then(m => m.Module08) },
  { path: '09-elementref-nativeelement', loadChildren: () => import('./09-elementref-nativeelement/09.module').then(m => m.Module09) },
  { path: '10-platform-renderer', loadChildren: () => import('./10-platform-renderer/10.module').then(m => m.Module10) },
  { path: '11-dynamic-components', loadChildren: () => import('./11-dynamic-components/10.module').then(m => m.Module10) },
  { path: '12-dynamic-input-data', loadChildren: () => import('./12-dynamic-input-data/module').then(m => m.Module) },
  { path: '13-dynamic-output-subscriptions', loadChildren: () => import('./13-dynamic-output-subscriptions/module').then(m => m.Module) },
  { path: '14-destroying-dynamic-components', loadChildren: () => import('./14-destroying-dynamic-components/module').then(m => m.Module) },
  { path: '15-rendering-order', loadChildren: () => import('./15-rendering-order/module').then(m => m.Module) },
  { path: '16-viewconteinerref', loadChildren: () => import('./16-viewconteinerref/module').then(m => m.Module) },
  { path: '17-template-context', loadChildren: () => import('./17-template-context/module').then(m => m.Module) },
  { path: '18-ngtemplate-outlet', loadChildren: () => import('./18-ngtemplate-outlet/module').then(m => m.Module) },
  { path: '19-ng-outlet-context', loadChildren: () => import('./19-ng-outlet-context/module').then(m => m.Module) },
  { path: '20-view-shadow-dom', loadChildren: () => import('./20-view-shadow-dom/module').then(m => m.Module) },
  { path: '21-changedetection', loadChildren: () => import('./21-changedetection/module').then(m => m.Module) },
  { path: '22-custom-directive', loadChildren: () => import('./22-custom-directive/module').then(m => m.Module) },
  { path: '23-host-listeners', loadChildren: () => import('./23-host-listeners/module').then(m => m.Module) },
  { path: '24-host-binding', loadChildren: () => import('./24-host-binding/module').then(m => m.Module) },
  { path: '25-expost-as', loadChildren: () => import('./25-expost-as/module').then(m => m.Module) },
  { path: '26-directive-structural', loadChildren: () => import('./26-directive-structural/module').then(m => m.Module) },
  { path: '27-custom-pipes', loadChildren: () => import('./27-custom-pipes/module').then(m => m.Module) },
  { path: '28-pipes-providers', loadChildren: () => import('./28-pipes-providers/module').then(m => m.Module) },
  /*{ path: '19-ng-outlet-context', loadChildren: () => import('./19-ng-outlet-context/module').then(m => m.Module) },
  { path: '15-rendering-order', loadChildren: () => import('./15-rendering-order/module').then(m => m.Module) },
  { path: '16-viewconteinerref', loadChildren: () => import('./16-viewconteinerref/module').then(m => m.Module) },
  { path: '17-template-context', loadChildren: () => import('./17-template-context/module').then(m => m.Module) },
  { path: '18-ngtemplate-outlet', loadChildren: () => import('./18-ngtemplate-outlet/module').then(m => m.Module) },
  { path: '19-ng-outlet-context', loadChildren: () => import('./19-ng-outlet-context/module').then(m => m.Module) }, */
  // { path: '**', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' }),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
