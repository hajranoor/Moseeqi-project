import { TestBed } from '@angular/core/testing';

import { AddplaylistService } from './addplaylist.service';

describe('AddplaylistService', () => {
  let service: AddplaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddplaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
