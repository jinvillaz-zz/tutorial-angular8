import { Component, OnInit } from '@angular/core';
import { User07 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-07',
  templateUrl: './07.component.html',
  styleUrls: ['./07.component.scss']
})
export class App07Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User07): void {
    console.log('Create account', user);
  }

  loginUser(user: User07): void {
    console.log('Login', user, this.rememberMe);
  }

}
