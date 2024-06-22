import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllSongsComponent } from './admin-all-songs.component';

describe('AdminAllSongsComponent', () => {
  let component: AdminAllSongsComponent;
  let fixture: ComponentFixture<AdminAllSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
