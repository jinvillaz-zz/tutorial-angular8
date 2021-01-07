import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-message10',
  template: `
    <div>
      You will be logged in for {{ days }} days
    </div>
  `
})
export class AuthMessage10Component {
  days = 7;
}
