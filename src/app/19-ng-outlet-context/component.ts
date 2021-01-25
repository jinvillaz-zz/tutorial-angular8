import { Component } from '@angular/core';

@Component({
  selector: 'app-19',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class AppComponent {
  ctx = {
    $implicit: 'Todd Motto',
    location: 'England, UK',
  };
}
