import { Component, OnInit } from '@angular/core';
import { httpClient } from '../shared/contracts/http-client.service';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { DogsComponent } from '../abstracts/dogs.component';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.scss']
})
export class AdoptionsComponent extends DogsComponent implements OnInit {
  constructor(client: httpClient){
    super(client.get<{ dogs: DogItem[]}>('/dogs/adoptions'))
  }
}
