import { Component, OnInit } from '@angular/core';
import { User1 } from './auth-form/auth-form1.interface';

@Component({
  selector: 'app-02',
  templateUrl: './02.component.html',
  styleUrls: ['./02.component.scss']
})
export class App02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createUser(user: User1): void {
    console.log('Create account', user);
  }

  loginUser(user: User1): void {
    console.log('Login', user);
  }

}
