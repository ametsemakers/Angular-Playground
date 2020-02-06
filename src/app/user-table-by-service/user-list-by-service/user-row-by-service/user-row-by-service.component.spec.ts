import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRowByServiceComponent } from './user-row-by-service.component';

describe('UserRowByServiceComponent', () => {
  let component: UserRowByServiceComponent;
  let fixture: ComponentFixture<UserRowByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRowByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
