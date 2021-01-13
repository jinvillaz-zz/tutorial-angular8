import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AuthFormModule } from './auth-form/auth-form.module';
import { AppRoutingModule } from './routing.module';
import { TestAppComponent } from './component';

@NgModule({
  declarations: [
    TestAppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class Module { }
