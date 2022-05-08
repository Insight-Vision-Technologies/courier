import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverOrderComponent } from './driver-order.component';

describe('DriverOrderComponent', () => {
  let component: DriverOrderComponent;
  let fixture: ComponentFixture<DriverOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
