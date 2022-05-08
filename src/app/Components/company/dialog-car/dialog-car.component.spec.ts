import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCarComponent } from './dialog-car.component';

describe('DialogCarComponent', () => {
  let component: DialogCarComponent;
  let fixture: ComponentFixture<DialogCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
