/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChatmessageformComponent } from './chatmessageform.component';

describe('ChatmessageformComponent', () => {
  let component: ChatmessageformComponent;
  let fixture: ComponentFixture<ChatmessageformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatmessageformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatmessageformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
