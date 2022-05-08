import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPaymentMethodComponent } from './dialog-add-payment-method.component';

describe('DialogAddPaymentMethodComponent', () => {
  let component: DialogAddPaymentMethodComponent;
  let fixture: ComponentFixture<DialogAddPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
