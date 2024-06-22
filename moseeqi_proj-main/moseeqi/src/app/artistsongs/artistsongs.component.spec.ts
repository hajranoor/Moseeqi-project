import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsongsComponent } from './artistsongs.component';

describe('ArtistsongsComponent', () => {
  let component: ArtistsongsComponent;
  let fixture: ComponentFixture<ArtistsongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
