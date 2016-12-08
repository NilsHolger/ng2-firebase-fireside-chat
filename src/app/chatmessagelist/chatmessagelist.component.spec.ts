/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChatmessagelistComponent } from './chatmessagelist.component';

describe('ChatmessagelistComponent', () => {
  let component: ChatmessagelistComponent;
  let fixture: ComponentFixture<ChatmessagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmessagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmessagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
