import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditFeedbackComponent } from './admin-edit-feedback.component';

describe('AdminEditFeedbackComponent', () => {
  let component: AdminEditFeedbackComponent;
  let fixture: ComponentFixture<AdminEditFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
