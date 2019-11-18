import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { CheckoutService } from '../shared/contracts/checkout.service';

@Component({
  selector: 'app-adopt-dog-item',
  templateUrl: './adopt-dog-item.component.html',
  styleUrls: ['./adopt-dog-item.component.scss']
})
export class AdoptDogItemComponent {
  @Input() dog: DogItem;
  @Output() adoptDog: EventEmitter<DogItem> = new EventEmitter();
  constructor(private checkoutService: CheckoutService<DogItem>) { }
  addToCart(item: DogItem) {
    this.checkoutService.addItem(item);
    this.adoptDog.emit(item);
  }
}
