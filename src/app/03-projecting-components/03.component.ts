import { Component, OnInit } from '@angular/core';
import { User03 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-03',
  templateUrl: './03.component.html',
  styleUrls: ['./03.component.scss']
})
export class App03Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User03): void {
    console.log('Create account', user);
  }

  loginUser(user: User03): void {
    console.log('Login', user, this.rememberMe);
  }

}
