import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderDetailsComponent } from './adminorder-details.component';

describe('AdminorderDetailsComponent', () => {
  let component: AdminorderDetailsComponent;
  let fixture: ComponentFixture<AdminorderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminorderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
