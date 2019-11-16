import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DogItem } from '../shared/contracts/models/dog-item.model';
import { httpClient } from '../shared/contracts/http-client.service';
import { DogsComponent } from '../abstracts/dogs.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends DogsComponent implements OnInit {
  constructor(client: httpClient){
    super(client.get<{ dogs: DogItem[]}>('/dogs'))
  }
}
