import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDirectionComponent } from './change-direction.component';

describe('ChangeDirectionComponent', () => {
  let component: ChangeDirectionComponent;
  let fixture: ComponentFixture<ChangeDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
