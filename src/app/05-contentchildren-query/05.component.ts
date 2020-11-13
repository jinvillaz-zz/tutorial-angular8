import { Component, OnInit } from '@angular/core';
import { User05 } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-05',
  templateUrl: './05.component.html',
  styleUrls: ['./05.component.scss']
})
export class App05Component implements OnInit {

  rememberMe = false;

  constructor() { }

  ngOnInit(): void {
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  createUser(user: User05): void {
    console.log('Create account', user);
  }

  loginUser(user: User05): void {
    console.log('Login', user, this.rememberMe);
  }

}
