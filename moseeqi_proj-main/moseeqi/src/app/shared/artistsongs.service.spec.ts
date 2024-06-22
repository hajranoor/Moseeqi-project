import { TestBed } from '@angular/core/testing';

import { ArtistsongsService } from './artistsongs.service';

describe('ArtistsongsService', () => {
  let service: ArtistsongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistsongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
