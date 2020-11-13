import { Component, OnInit } from '@angular/core';
import { User08 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-08',
  templateUrl: './08.component.html',
  styleUrls: ['./08.component.scss']
})
export class App08Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User08): void {
    console.log('Create account', user);
  }

  loginUser(user: User08): void {
    console.log('Login', user, this.rememberMe);
  }

}
