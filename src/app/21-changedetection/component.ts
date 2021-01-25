import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-21',
  template: `
    <div class="main-container">
      <button (click)="addProp()">Add property</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <app-example-one [user]="user"></app-example-one>
        <app-example-two [user]="user"></app-example-two>
      </div>
    </div>
  `,
  styleUrls: ['./component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

  addProp(): void {
    this.user.email = 'blink@blink-182.net';
  }

  changeName(): void {
    this.user.name = 'Travis Barker';
  }

  changeUser(): void {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    };
  }
}
