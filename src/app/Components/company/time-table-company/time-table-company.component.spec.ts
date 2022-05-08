import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableCompanyComponent } from './time-table-company.component';

describe('TimeTableCompanyComponent', () => {
  let component: TimeTableCompanyComponent;
  let fixture: ComponentFixture<TimeTableCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTableCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
