import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPricingComponent } from './admin-edit-pricing.component';

describe('AdminEditPricingComponent', () => {
  let component: AdminEditPricingComponent;
  let fixture: ComponentFixture<AdminEditPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
