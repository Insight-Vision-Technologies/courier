import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourireDerailsComponent } from './admin-courire-derails.component';

describe('AdminCourireDerailsComponent', () => {
  let component: AdminCourireDerailsComponent;
  let fixture: ComponentFixture<AdminCourireDerailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourireDerailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourireDerailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
