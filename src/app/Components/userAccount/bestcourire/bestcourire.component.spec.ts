import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestcourireComponent } from './bestcourire.component';

describe('BestcourireComponent', () => {
  let component: BestcourireComponent;
  let fixture: ComponentFixture<BestcourireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestcourireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestcourireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
