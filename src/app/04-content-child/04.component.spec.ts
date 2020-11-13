import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App04Component } from './04.component';

describe('AboutComponent', () => {
  let component: App04Component;
  let fixture: ComponentFixture<App04Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
