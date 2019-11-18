import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DogItem } from '../shared/contracts/models/dog-item.model';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DogItemComponent {
  @Input() dog: DogItem;
  constructor() { }
}
