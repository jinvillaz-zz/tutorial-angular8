import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App05Component } from './05.component';

describe('AboutComponent', () => {
  let component: App05Component;
  let fixture: ComponentFixture<App05Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
