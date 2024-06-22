import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistdeleteComponent } from './admin-artistdelete.component';

describe('AdminArtistdeleteComponent', () => {
  let component: AdminArtistdeleteComponent;
  let fixture: ComponentFixture<AdminArtistdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArtistdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtistdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
