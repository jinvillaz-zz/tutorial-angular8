import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember09',
  template: `
    <div flex>
      <label>
        <input type="checkbox" (change)="onChecked($event.target.checked)">
        Keep me logged in
      </label>
    </div>
  `,
  styles: ['div { padding: 5px }']
})
export class AuthRemember09Component {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean): void {
    this.checked.emit(value);
  }

}
