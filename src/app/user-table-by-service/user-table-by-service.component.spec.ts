import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableByServiceComponent } from './user-table-by-service.component';

describe('UserTableByServiceComponent', () => {
  let component: UserTableByServiceComponent;
  let fixture: ComponentFixture<UserTableByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
