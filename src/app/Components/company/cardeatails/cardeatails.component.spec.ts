import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeatailsComponent } from './cardeatails.component';

describe('CardeatailsComponent', () => {
  let component: CardeatailsComponent;
  let fixture: ComponentFixture<CardeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
