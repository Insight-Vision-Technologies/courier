import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourirefinanceComponent } from './admin-courirefinance.component';

describe('AdminCourirefinanceComponent', () => {
  let component: AdminCourirefinanceComponent;
  let fixture: ComponentFixture<AdminCourirefinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourirefinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourirefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
