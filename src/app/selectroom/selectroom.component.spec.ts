/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectroomComponent } from './selectroom.component';

describe('SelectroomComponent', () => {
  let component: SelectroomComponent;
  let fixture: ComponentFixture<SelectroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
