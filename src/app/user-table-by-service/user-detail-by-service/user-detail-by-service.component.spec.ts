import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailByServiceComponent } from './user-detail-by-service.component';

describe('UserDetailByServiceComponent', () => {
  let component: UserDetailByServiceComponent;
  let fixture: ComponentFixture<UserDetailByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
