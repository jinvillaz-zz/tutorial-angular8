import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-message08',
  template: `
    <div>
      You will be logged in for {{ days }} days
    </div>
  `
})
export class AuthMessage08Component {
  days = 7;
}
