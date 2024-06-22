import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerPanelComponent } from './listener-panel.component';

describe('ListenerPanelComponent', () => {
  let component: ListenerPanelComponent;
  let fixture: ComponentFixture<ListenerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenerPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListenerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
