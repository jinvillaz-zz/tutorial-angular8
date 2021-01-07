import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-13',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create account';
    component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User): void {
    console.log('Login', user);
  }

}
