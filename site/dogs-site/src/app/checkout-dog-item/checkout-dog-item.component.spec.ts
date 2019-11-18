import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDogItemComponent } from './checkout-dog-item.component';

describe('CheckoutDogItemComponent', () => {
  let component: CheckoutDogItemComponent;
  let fixture: ComponentFixture<CheckoutDogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutDogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
