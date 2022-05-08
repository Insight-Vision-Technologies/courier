import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPricingComponent } from './main-pricing.component';

describe('MainPricingComponent', () => {
  let component: MainPricingComponent;
  let fixture: ComponentFixture<MainPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
