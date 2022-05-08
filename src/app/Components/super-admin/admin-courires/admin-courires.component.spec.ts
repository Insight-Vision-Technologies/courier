import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCouriresComponent } from './admin-courires.component';

describe('AdminCouriresComponent', () => {
  let component: AdminCouriresComponent;
  let fixture: ComponentFixture<AdminCouriresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCouriresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCouriresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
