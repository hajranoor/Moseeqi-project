import { TestBed } from '@angular/core/testing';

import { FollowermanagerService } from './followermanager.service';

describe('FollowermanagerService', () => {
  let service: FollowermanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowermanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
