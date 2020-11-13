import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember04',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
    </label>
  `
})
export class AuthRemember04Component {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean): void {
    this.checked.emit(value);
  }

}
