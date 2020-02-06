import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListByServiceComponent } from './user-list-by-service.component';

describe('UserListByServiceComponent', () => {
  let component: UserListByServiceComponent;
  let fixture: ComponentFixture<UserListByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
