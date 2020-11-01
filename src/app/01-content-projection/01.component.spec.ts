import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App01Component } from './01.component';

describe('UsersComponent', () => {
  let component: App01Component;
  let fixture: ComponentFixture<App01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
