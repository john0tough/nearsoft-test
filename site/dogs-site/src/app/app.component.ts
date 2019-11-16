import { Component } from '@angular/core';
import { httpClient } from './shared/contracts/http-client.service';
import { DogItem } from './shared/contracts/models/dog-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogs-site';

}
