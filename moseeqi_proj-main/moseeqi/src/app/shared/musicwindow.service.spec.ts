import { TestBed } from '@angular/core/testing';

import { MusicwindowService } from './musicwindow.service';

describe('MusicwindowService', () => {
  let service: MusicwindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicwindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
