import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../shared/contracts/checkout.service';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  counter$: Observable<number>;
  constructor(checkoutService: CheckoutService<DogItem>) {
    this.counter$ = checkoutService.getCheckout().pipe(map(items => items.length));
   }

}
