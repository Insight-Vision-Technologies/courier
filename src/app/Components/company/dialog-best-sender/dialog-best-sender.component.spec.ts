import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBestSenderComponent } from './dialog-best-sender.component';

describe('DialogBestSenderComponent', () => {
  let component: DialogBestSenderComponent;
  let fixture: ComponentFixture<DialogBestSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBestSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBestSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
