import { Component, OnInit } from '@angular/core';
import { User06 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-06',
  templateUrl: './06.component.html',
  styleUrls: ['./06.component.scss']
})
export class App06Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User06): void {
    console.log('Create account', user);
  }

  loginUser(user: User06): void {
    console.log('Login', user, this.rememberMe);
  }

}
