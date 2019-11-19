import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutComponent } from './checkout.component';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { CheckoutService } from '../shared/contracts/checkout.service';
import { CheckoutDogItemComponent } from '../checkout-dog-item/checkout-dog-item.component';
import { of } from 'rxjs';
import { DoggyService } from '../shared/contracts/doggy.service';
import { DebugElement } from '@angular/core';
import { AdoptionCheckoutService } from '../shared/adoption-checkout.service';
import { By } from '@angular/platform-browser';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  const mockCheckoutService = jasmine.createSpyObj<CheckoutService<DogItem>>('CheckoutService', ['getCheckout', 'removeItem']);
  const mockDoggyService = jasmine.createSpyObj<DoggyService<DogItem>>('DoggyService', ['adoptDogs']);
  const declaration = [
    CheckoutComponent,
    CheckoutDogItemComponent
  ];
  const checkoutWithItems = [
    { id: '1' } as DogItem,
    {  id: '2' } as DogItem,
    {  id: '3' } as DogItem,
  ];
  const emptyCheckout = [];

  /*
  Normalmente hago uso de la libreria ngMocks, para el mock de componentes y directivas,
  pero no pude instalar la libreria por falta de internet
  Y para servicios que emplean observables suelo emplear jasmine-marbles, pero tampoco pude instalar la libreria
  */
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declaration,
      providers: [
        { provide: CheckoutService, useValue: mockCheckoutService },
        { provide: DoggyService, useValue: mockDoggyService }
      ]
    })
    .overrideComponent(CheckoutDogItemComponent, {
      set: {
        selector: 'app-checkout-dog-item',
        template: '<h1>mock</h1>'
      }
    })
    .compileComponents();

  }));
  const init = (content: DogItem[]) => {
    mockCheckoutService.removeItem.and.callThrough();
    mockDoggyService.adoptDogs.and.returnValue(of(content));
    mockCheckoutService.getCheckout.and.returnValue(of(content));
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
  it('should create', () => {
    init(emptyCheckout);
    expect(component).toBeTruthy();
  });
  it('should display three elements on list', () => {
    init(checkoutWithItems);
    const elements = fixture.debugElement.queryAll(By.css('h1'));
    expect(elements.length).toBe(checkoutWithItems.length);
  });
  it('should submit checkout', () => {
    init(checkoutWithItems);
    let submitButton = fixture.debugElement.query(By.css('.btn'))
    submitButton.nativeElement.click();
    component.checkout = []; // eliminamos los valores del checkout que es lo que deberia de hacer el metodo removeItem
    fixture.detectChanges();
    submitButton = fixture.debugElement.query(By.css('.btn'))
    expect(submitButton).toBeFalsy();
    expect(mockDoggyService.adoptDogs).toHaveBeenCalledTimes(1);
    expect(mockCheckoutService.removeItem).toHaveBeenCalledTimes(3);
  });
});
