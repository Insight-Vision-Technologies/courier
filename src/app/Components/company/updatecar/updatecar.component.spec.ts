import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecarComponent } from './updatecar.component';

describe('UpdatecarComponent', () => {
  let component: UpdatecarComponent;
  let fixture: ComponentFixture<UpdatecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
