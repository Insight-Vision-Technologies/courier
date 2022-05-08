import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDirectionComponent } from './car-direction.component';

describe('CarDirectionComponent', () => {
  let component: CarDirectionComponent;
  let fixture: ComponentFixture<CarDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
