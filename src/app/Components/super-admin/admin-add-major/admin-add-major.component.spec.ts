import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddMajorComponent } from './admin-add-major.component';

describe('AdminAddMajorComponent', () => {
  let component: AdminAddMajorComponent;
  let fixture: ComponentFixture<AdminAddMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddMajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
