import { TestBed } from '@angular/core/testing';

import { UploadsongService } from './uploadsong.service';

describe('UploadsongService', () => {
  let service: UploadsongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadsongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
