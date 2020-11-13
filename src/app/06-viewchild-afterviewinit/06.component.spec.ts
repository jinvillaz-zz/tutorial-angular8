import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App06Component } from './06.component';

describe('AboutComponent', () => {
  let component: App06Component;
  let fixture: ComponentFixture<App06Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
