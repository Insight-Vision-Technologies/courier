import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvailableComponent } from './dialog-available.component';

describe('DialogAvailableComponent', () => {
  let component: DialogAvailableComponent;
  let fixture: ComponentFixture<DialogAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
