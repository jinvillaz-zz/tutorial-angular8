import { AfterContentInit, TemplateRef, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef,
  ComponentRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-17',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class AppComponent {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.tmpl, { $implicit: 'Moto Add', location: 'England, UK'});
  }
}
