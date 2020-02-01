import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypageAngularComponent } from './typage-angular.component';

describe('TypageAngularComponent', () => {
  let component: TypageAngularComponent;
  let fixture: ComponentFixture<TypageAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypageAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypageAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
