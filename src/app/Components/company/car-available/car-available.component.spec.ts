import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAvailableComponent } from './car-available.component';

describe('CarAvailableComponent', () => {
  let component: CarAvailableComponent;
  let fixture: ComponentFixture<CarAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
