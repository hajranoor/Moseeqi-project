import { TestBed } from '@angular/core/testing';

import { GettinginfoserviceService } from './gettinginfoservice.service';

describe('GettinginfoserviceService', () => {
  let service: GettinginfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettinginfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
