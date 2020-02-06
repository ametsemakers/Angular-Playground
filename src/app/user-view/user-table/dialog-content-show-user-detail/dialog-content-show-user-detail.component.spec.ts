import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentShowUserDetailComponent } from './dialog-content-show-user-detail.component';

describe('DialogContentShowUserDetailComponent', () => {
  let component: DialogContentShowUserDetailComponent;
  let fixture: ComponentFixture<DialogContentShowUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentShowUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentShowUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
