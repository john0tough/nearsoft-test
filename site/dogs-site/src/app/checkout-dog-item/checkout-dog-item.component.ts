import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { CheckoutService } from '../shared/contracts/checkout.service';

@Component({
  selector: 'app-checkout-dog-item',
  templateUrl: './checkout-dog-item.component.html',
  styleUrls: ['./checkout-dog-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutDogItemComponent {
  @Input() dog: DogItem;
  constructor(private checkoutService: CheckoutService<DogItem>) { }
  removeItem(dog: DogItem): void{
    this.checkoutService.removeItem(dog);
  }
}
