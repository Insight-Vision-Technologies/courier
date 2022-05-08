import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditfeatureComponent } from './admin-editfeature.component';

describe('AdminEditfeatureComponent', () => {
  let component: AdminEditfeatureComponent;
  let fixture: ComponentFixture<AdminEditfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
