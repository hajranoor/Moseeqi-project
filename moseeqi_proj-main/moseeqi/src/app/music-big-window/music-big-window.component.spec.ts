import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicBigWindowComponent } from './music-big-window.component';

describe('MusicBigWindowComponent', () => {
  let component: MusicBigWindowComponent;
  let fixture: ComponentFixture<MusicBigWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicBigWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicBigWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
