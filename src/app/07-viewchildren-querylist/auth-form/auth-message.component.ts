import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-message07',
  template: `
    <div>
      You will be logged in for {{ days }} days
    </div>
  `
})
export class AuthMessage07Component {
  days = 7;
}
