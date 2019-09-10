import { Component, OnInit } from '@angular/core';
import { User1 } from './auth-form/auth-form.interface1';

@Component({
  selector: 'app-02',
  templateUrl: './02.component.html',
  styleUrls: ['./02.component.scss']
})
export class Component02 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createUser(user: User1) {
    console.log('Create account', user);
  }

  loginUser(user: User1) {
    console.log('Login', user);
  }

}
