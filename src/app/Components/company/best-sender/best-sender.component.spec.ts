import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSenderComponent } from './best-sender.component';

describe('BestSenderComponent', () => {
  let component: BestSenderComponent;
  let fixture: ComponentFixture<BestSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
