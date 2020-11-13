import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App08Component } from './08.component';

describe('AboutComponent', () => {
  let component: App08Component;
  let fixture: ComponentFixture<App08Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
