import { Component, OnInit } from '@angular/core';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { CheckoutService } from '../shared/contracts/checkout.service';
import { DoggyService } from '../shared/contracts/doggy.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  checkout: DogItem[];
  constructor(checkoutService: CheckoutService<DogItem>, private doggyService: DoggyService<DogItem>) {
    checkoutService.getCheckout().subscribe(adoptionDogs => this.checkout = adoptionDogs);
  }

  onAdoptDogs(checkout: DogItem[]): void{
    this.doggyService.adoptDogs(checkout).subscribe(adopted => {
      this.checkout = [];
    });
  }

}
