import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserorderinfoComponent } from './adminuserorderinfo.component';

describe('AdminuserorderinfoComponent', () => {
  let component: AdminuserorderinfoComponent;
  let fixture: ComponentFixture<AdminuserorderinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminuserorderinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserorderinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
