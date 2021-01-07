import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { App09Component } from './09.component';

describe('AboutComponent', () => {
  let component: App09Component;
  let fixture: ComponentFixture<App09Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ App09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
