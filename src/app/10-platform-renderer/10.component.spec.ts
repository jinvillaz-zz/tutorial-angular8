import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App10Component } from './10.component';

describe('AboutComponent', () => {
  let component: App10Component;
  let fixture: ComponentFixture<App10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
