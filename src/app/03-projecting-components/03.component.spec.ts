import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App03Component } from './03.component';

describe('AboutComponent', () => {
  let component: App03Component;
  let fixture: ComponentFixture<App03Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
