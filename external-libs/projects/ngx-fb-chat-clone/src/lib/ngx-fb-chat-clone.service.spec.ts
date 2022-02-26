import { TestBed } from '@angular/core/testing';

import { NgxFbChatCloneService } from './ngx-fb-chat-clone.service';

describe('NgxFbChatCloneService', () => {
  let service: NgxFbChatCloneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFbChatCloneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
