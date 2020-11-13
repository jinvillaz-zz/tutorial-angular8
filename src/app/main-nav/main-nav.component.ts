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
  selectedItem = '';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.links.push(
      { path: '/', value: 'Home' },
      { path: '/01-content-projection', value: '01-content-projection' },
      { path: '/02-injection-slots', value: '02-injection-slots' },
      { path: '/03-projecting-components', value: '03-projecting-components' },
      { path: '/04-content-child-aftercontentinit', value: '04-content-child-aftercontentinit' },
      { path: '/05-contentchildren-query', value: '05-contentchildren-querylists' },
      { path: '/06-viewchild-afterviewinit', value: '06-viewchild-afterviewinit' },
      { path: '/07-viewchildren-querylist', value: '07-viewchildren-querylist' },
      { path: '/08-viewchild-templateref', value: '08-viewchild-templateref' },
    );
  }
}
