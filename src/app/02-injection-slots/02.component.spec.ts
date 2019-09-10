import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component02 } from './02.component';

describe('AboutComponent', () => {
  let component: Component02;
  let fixture: ComponentFixture<Component02>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component02 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
