import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component01 } from './01.component';

describe('UsersComponent', () => {
  let component: Component01;
  let fixture: ComponentFixture<Component01>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component01 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
