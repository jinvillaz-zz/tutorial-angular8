import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthForm10Component } from './auth-form/auth-form.component';
import { User10 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-10',
  templateUrl: './10.component.html',
  styleUrls: ['./10.component.scss']
})
export class App10Component implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthForm10Component);
    const component = this.entry.createComponent(authFormFactory);
    const component1 = this.entry.createComponent(authFormFactory);
  }

  loginUser(user: User10): void {
    console.log('Login', user);
  }

}
