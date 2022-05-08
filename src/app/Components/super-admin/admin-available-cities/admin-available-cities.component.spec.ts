import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvailableCitiesComponent } from './admin-available-cities.component';

describe('AdminAvailableCitiesComponent', () => {
  let component: AdminAvailableCitiesComponent;
  let fixture: ComponentFixture<AdminAvailableCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAvailableCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAvailableCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
