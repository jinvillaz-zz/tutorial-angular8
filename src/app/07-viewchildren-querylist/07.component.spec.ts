import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App07Component } from './07.component';

describe('AboutComponent', () => {
  let component: App07Component;
  let fixture: ComponentFixture<App07Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
