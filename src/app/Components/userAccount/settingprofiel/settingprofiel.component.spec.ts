import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingprofielComponent } from './settingprofiel.component';

describe('SettingprofielComponent', () => {
  let component: SettingprofielComponent;
  let fixture: ComponentFixture<SettingprofielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingprofielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingprofielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
