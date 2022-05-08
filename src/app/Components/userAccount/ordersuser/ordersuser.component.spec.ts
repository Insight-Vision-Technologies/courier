import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersuserComponent } from './ordersuser.component';

describe('OrdersuserComponent', () => {
  let component: OrdersuserComponent;
  let fixture: ComponentFixture<OrdersuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
