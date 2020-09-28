import { Component, OnInit } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-01',
  templateUrl: './01.component.html',
  styleUrls: ['./01.component.scss']
})
export class App01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
