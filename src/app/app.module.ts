import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { Module01 } from './01-content-projection/01.module';
import { Module02 } from './02-injection-slots/02.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    Module01,
    Module02
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
