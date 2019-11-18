import { Component } from '@angular/core';;
import { DogsComponent } from '../abstracts/dogs.component';
import { DogStatus, DoggyService } from '../shared/contracts/doggy.service';
import { AdoptionDogItem } from '../shared/contracts/models/adoption-dog-item.model';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { CheckoutService } from '../shared/contracts/checkout.service';
import { withLatestFrom, map } from 'rxjs/operators';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends DogsComponent {
  adoptDogs: AdoptionDogItem[] = [];
  constructor(service: DoggyService<AdoptionDogItem>, checkoutService: CheckoutService<DogItem>) {
    super();
    service.getDogs(DogStatus.ForAdoption).pipe(
      withLatestFrom(checkoutService.getCheckout()),
      map(([adopt, checkout]) => adopt.filter(i => !checkout.some(ii => ii.id === i.id)))
      ).subscribe(dogs => this.dogs = dogs );
  }

  onAdopt(dog: DogItem) {
    this.dogs = this.dogs.filter(i => i.id !== dog.id);
  }
}
