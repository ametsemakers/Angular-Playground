import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingParentComponent } from './shopping-parent.component';

describe('ShoppingParentComponent', () => {
  let component: ShoppingParentComponent;
  let fixture: ComponentFixture<ShoppingParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
