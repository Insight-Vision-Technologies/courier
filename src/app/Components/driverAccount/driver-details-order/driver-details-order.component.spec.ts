import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailsOrderComponent } from './driver-details-order.component';

describe('DriverDetailsOrderComponent', () => {
  let component: DriverDetailsOrderComponent;
  let fixture: ComponentFixture<DriverDetailsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailsOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
