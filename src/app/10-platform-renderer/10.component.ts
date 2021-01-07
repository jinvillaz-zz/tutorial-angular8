import { Component, OnInit } from '@angular/core';
import { User10 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-10',
  templateUrl: './10.component.html',
  styleUrls: ['./10.component.scss']
})
export class App10Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User10): void {
    console.log('Create account', user);
  }

  loginUser(user: User10): void {
    console.log('Login', user, this.rememberMe);
  }

}
