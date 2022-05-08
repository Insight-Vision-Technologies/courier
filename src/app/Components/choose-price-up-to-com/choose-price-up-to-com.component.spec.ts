import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePriceUpToComComponent } from './choose-price-up-to-com.component';

describe('ChoosePriceUpToComComponent', () => {
  let component: ChoosePriceUpToComComponent;
  let fixture: ComponentFixture<ChoosePriceUpToComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePriceUpToComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePriceUpToComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
