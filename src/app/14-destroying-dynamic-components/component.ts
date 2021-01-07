import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef,
  ComponentRef } from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-14',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent(): void {
    this.component.destroy();
  }

  loginUser(user: User): void {
    console.log('Login', user);
  }

}
