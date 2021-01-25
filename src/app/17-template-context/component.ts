import { AfterContentInit, TemplateRef, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef,
  ComponentRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-17',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.tmpl, { $implicit: 'Moto Add', location: 'England, UK'});
  }
}
