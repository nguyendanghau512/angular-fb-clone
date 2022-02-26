import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFbChatCloneComponent } from './ngx-fb-chat-clone.component';

describe('NgxFbChatCloneComponent', () => {
  let component: NgxFbChatCloneComponent;
  let fixture: ComponentFixture<NgxFbChatCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFbChatCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFbChatCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
