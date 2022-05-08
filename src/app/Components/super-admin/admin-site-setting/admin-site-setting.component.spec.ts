import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteSettingComponent } from './admin-site-setting.component';

describe('AdminSiteSettingComponent', () => {
  let component: AdminSiteSettingComponent;
  let fixture: ComponentFixture<AdminSiteSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSiteSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
