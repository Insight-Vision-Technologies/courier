import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserorderinvoiceComponent } from './userorderinvoice.component';

describe('UserorderinvoiceComponent', () => {
  let component: UserorderinvoiceComponent;
  let fixture: ComponentFixture<UserorderinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserorderinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserorderinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
