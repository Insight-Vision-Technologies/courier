import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingOrdrbynumComponent } from './tracking-ordrbynum.component';

describe('TrackingOrdrbynumComponent', () => {
  let component: TrackingOrdrbynumComponent;
  let fixture: ComponentFixture<TrackingOrdrbynumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingOrdrbynumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingOrdrbynumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
