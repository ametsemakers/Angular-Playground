import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionApiComponent } from './connection-api.component';

describe('ConnectionApiComponent', () => {
  let component: ConnectionApiComponent;
  let fixture: ComponentFixture<ConnectionApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
