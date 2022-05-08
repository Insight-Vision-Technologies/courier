import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesxtComponent } from './tesxt.component';

describe('TesxtComponent', () => {
  let component: TesxtComponent;
  let fixture: ComponentFixture<TesxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
