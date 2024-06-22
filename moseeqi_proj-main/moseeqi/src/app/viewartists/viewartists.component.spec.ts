import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewartistsComponent } from './viewartists.component';

describe('ViewartistsComponent', () => {
  let component: ViewartistsComponent;
  let fixture: ComponentFixture<ViewartistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewartistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewartistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
