import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogsComponent } from '../abstracts/dogs.component';
import { DogStatus, DoggyService } from '../shared/contracts/doggy.service';
import { AdoptionDogItem } from '../shared/contracts/models/adoption-dog-item.model';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.scss']
})
export class AdoptionsComponent extends DogsComponent implements OnDestroy {
  constructor(service: DoggyService<AdoptionDogItem>) {
    super(service.getDogs(DogStatus.Adopted));
  }
}
