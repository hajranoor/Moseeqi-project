import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListenerdeleteComponent } from './admin-listenerdelete.component';

describe('AdminListenerdeleteComponent', () => {
  let component: AdminListenerdeleteComponent;
  let fixture: ComponentFixture<AdminListenerdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListenerdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListenerdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
