import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPagesComponent } from './driver-pages.component';

describe('DriverPagesComponent', () => {
  let component: DriverPagesComponent;
  let fixture: ComponentFixture<DriverPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
