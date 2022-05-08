import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverHelpComponent } from './driver-help.component';

describe('DriverHelpComponent', () => {
  let component: DriverHelpComponent;
  let fixture: ComponentFixture<DriverHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
