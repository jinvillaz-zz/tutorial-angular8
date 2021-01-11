import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { App02Component } from './02.component';

describe('AboutComponent', () => {
  let component: App02Component;
  let fixture: ComponentFixture<App02Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
