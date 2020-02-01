import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingChildComponent } from './shopping-child.component';

describe('ShoppingChildComponent', () => {
  let component: ShoppingChildComponent;
  let fixture: ComponentFixture<ShoppingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
