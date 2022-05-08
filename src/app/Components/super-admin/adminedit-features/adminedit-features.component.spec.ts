import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditFeaturesComponent } from './adminedit-features.component';

describe('AdmineditFeaturesComponent', () => {
  let component: AdmineditFeaturesComponent;
  let fixture: ComponentFixture<AdmineditFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
