import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrNOComponent } from './user-or-no.component';

describe('UserOrNOComponent', () => {
  let component: UserOrNOComponent;
  let fixture: ComponentFixture<UserOrNOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrNOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrNOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
