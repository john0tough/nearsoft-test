import { Observable } from 'rxjs';
import { AdoptionDogItem } from '../shared/contracts/models/adoption-dog-item.model';

export abstract class DogsComponent {
    dogs: AdoptionDogItem[];

    constructor() {
    }
}
