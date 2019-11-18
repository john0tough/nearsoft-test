import { Component, OnDestroy } from '@angular/core';;
import { DogsComponent } from '../abstracts/dogs.component';
import { DogStatus, DoggyService } from '../shared/contracts/doggy.service';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { CheckoutService } from '../shared/contracts/checkout.service';
import { withLatestFrom, map } from 'rxjs/operators';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends DogsComponent  implements OnDestroy {
  constructor(service: DoggyService<DogItem>, checkoutService: CheckoutService<DogItem>) {
    super(service.getDogs(DogStatus.ForAdoption).pipe(
      withLatestFrom(checkoutService.getCheckout()),
      map(([adopt, checkout]) => adopt.filter(i => !checkout.some(ii => ii.id === i.id)))
      ));
  }

  onAdopt(dog: DogItem) {
    this.dogs = this.dogs.filter(i => i.id !== dog.id);
  }
}
