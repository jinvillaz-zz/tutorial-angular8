import { Component, OnInit } from '@angular/core';
import { User09 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-09',
  templateUrl: './09.component.html',
  styleUrls: ['./09.component.scss']
})
export class App09Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User09): void {
    console.log('Create account', user);
  }

  loginUser(user: User09): void {
    console.log('Login', user, this.rememberMe);
  }

}
