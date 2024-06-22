import { TestBed } from '@angular/core/testing';

import { AdminAllUsersService } from './admin-deleteusers.service';

describe('AdminAllUsersService', () => {
  let service: AdminAllUsersService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAllUsersService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
