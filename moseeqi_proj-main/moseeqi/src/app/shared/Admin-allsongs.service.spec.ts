import { TestBed } from '@angular/core/testing';

import { AdminAllsongsService } from './Admin-allsongs.service';

describe('UploadsongService', () => {
  let service: AdminAllsongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAllsongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
