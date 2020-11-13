import { Component, OnInit } from '@angular/core';
import { User04 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-04',
  templateUrl: './04.component.html',
  styleUrls: ['./04.component.scss']
})
export class App04Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User04): void {
    console.log('Create account', user);
  }

  loginUser(user: User04): void {
    console.log('Login', user, this.rememberMe);
  }

}
