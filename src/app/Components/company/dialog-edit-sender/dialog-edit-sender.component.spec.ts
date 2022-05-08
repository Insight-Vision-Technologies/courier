import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditSenderComponent } from './dialog-edit-sender.component';

describe('DialogEditSenderComponent', () => {
  let component: DialogEditSenderComponent;
  let fixture: ComponentFixture<DialogEditSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
