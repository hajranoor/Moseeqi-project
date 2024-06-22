import { TestBed } from '@angular/core/testing';

import { ViewartistsService } from './viewartists.service';

describe('ViewartistsService', () => {
  let service: ViewartistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewartistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
