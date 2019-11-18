import { Component, Input } from '@angular/core';
import { DogItem } from '../shared/contracts/models/dog-item.model';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.scss']
})
export class DogItemComponent {
  @Input() dog: DogItem;
  constructor() { }
}
