import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  links: Array<{ value: string, path: string, index: number }> = [];
  activeLinkIndex = -1;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.links.push(
      { path: '/', value: 'Home', index: 0 },
      { path: '/01-content-projection', value: '01-content-projection', index: 1 },
      { path: '/02-injection-slots', value: '02-injection-slots', index: 2 },
      { path: '/03-projecting-components', value: '03-projecting-components', index: 3 },
      { path: '/04-content-child-aftercontentinit', value: '04-content-child-aftercontentinit', index: 4 },
      { path: '/05-contentchildren-query', value: '05-contentchildren-querylists', index: 5 },
      { path: '/06-viewchild-afterviewinit', value: '06-viewchild-afterviewinit', index: 6 },
      { path: '/07-viewchildren-querylist', value: '07-viewchildren-querylist', index: 7 },
      { path: '/08-viewchild-templateref', value: '08-viewchild-templateref', index: 8 },
      { path: '/09-elementref-nativeelement', value: '09-elementref-nativeelement', index: 9 },
      { path: '/10-platform-renderer', value: '10-platform-renderer', index: 10 },
      { path: '/11-dynamic-components', value: '11-dynamic-components', index: 11 },
      { path: '/12-dynamic-input-data', value: '12-dynamic-input-data', index: 12 },
      { path: '/13-dynamic-output-subscriptions', value: '13-dynamic-output-subscriptions', index: 13 },
      { path: '/14-destroying-dynamic-components', value: '14-destroying-dynamic-components', index: 14 },
      { path: '/15-rendering-order', value: '15-rendering-order', index: 15 },
      { path: '/16-viewconteinerref', value: '16-viewconteinerref', index: 16 },
      { path: '/17-template-context', value: '17-template-context', index: 17 },
      { path: '/18-ngtemplate-outlet', value: '18-ngtemplate-outlet', index: 18 },
      { path: '/19-ng-outlet-context', value: '19-ng-outlet-context', index: 19 },
      { path: '/20-view-shadow-dom', value: '20-view-shadow-dom', index: 20 },
      { path: '/21-changedetection', value: '21-changedetection', index: 21 },
      { path: '/22-custom-directive', value: '22-custom-directive', index: 22 },
      { path: '/23-host-listeners', value: '23-host-listeners', index: 23 },
      { path: '/24-host-binding', value: '24-host-binding', index: 24 },
      { path: '/25-expost-as', value: '25-expost-as', index: 25 },
      { path: '/26-directive-structural', value: '26-directive-structural', index: 26 },
      { path: '/27-custom-pipes', value: '27-custom-pipes', index: 27 },
      { path: '/28-pipes-providers', value: '28-pipes-providers', index: 28 },
      /*{ path: '/11-dynamic-components', value: '11-dynamic-components', index: 29 },
      { path: '/12-dynamic-input-data', value: '12-dynamic-input-data', index: 30 },
      { path: '/13-dynamic-output-subscriptions', value: '13-dynamic-output-subscriptions', index: 31 },
      { path: '/14-destroying-dynamic-components', value: '14-destroying-dynamic-components', index: 32 },
      { path: '/15-rendering-order', value: '15-rendering-order', index: 33 },
      { path: '/16-viewconteinerref', value: '16-viewconteinerref', index: 34 },
      { path: '/17-template-context', value: '17-template-context', index: 35 },
      { path: '/18-ngtemplate-outlet', value: '18-ngtemplate-outlet', index: 36 },
      { path: '/19-ng-outlet-context', value: '19-ng-outlet-context', index: 37 }, */
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.links.indexOf(this.links.find(tab => tab.path === '.' + this.router.url));
    });
  }
}
