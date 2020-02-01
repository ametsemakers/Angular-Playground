import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveAngularComponent } from './directive-angular.component';

describe('DirectiveAngularComponent', () => {
  let component: DirectiveAngularComponent;
  let fixture: ComponentFixture<DirectiveAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
