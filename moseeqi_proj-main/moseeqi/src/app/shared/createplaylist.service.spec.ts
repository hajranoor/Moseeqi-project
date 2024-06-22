import { TestBed } from '@angular/core/testing';

import { CreateplaylistService } from './createplaylist.service';

describe('CreateplaylistService', () => {
  let service: CreateplaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateplaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
