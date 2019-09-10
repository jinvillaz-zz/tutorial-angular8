import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  links: Array<{ value: string, path: string }> = [];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.links.push(
      { path: '/', value: 'Home' },
      { path: '/01-content-projection', value: '01-content-projection' },
      { path: '/02-injection-slots', value: '02-injection-slots' }
    );
  }

}
