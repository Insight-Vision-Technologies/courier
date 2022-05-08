import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditCouriresComponent } from './admin-edit-courires.component';

describe('AdminEditCouriresComponent', () => {
  let component: AdminEditCouriresComponent;
  let fixture: ComponentFixture<AdminEditCouriresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditCouriresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditCouriresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
