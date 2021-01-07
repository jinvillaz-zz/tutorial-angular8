import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-message09',
  template: `
    <div>
      You will be logged in for {{ days }} days
    </div>
  `
})
export class AuthMessage09Component {
  days = 7;
}
