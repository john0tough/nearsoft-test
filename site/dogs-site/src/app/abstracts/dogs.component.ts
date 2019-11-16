import { Observable } from 'rxjs';
import { DogItem } from '../shared/contracts/models/dog-item.model';

export abstract class DogsComponent {
    dogs: DogItem[]
    
    constructor(private dogs$: Observable<{
        dogs: DogItem[];
    }>) {}

    ngOnInit() {
        this.dogs$.subscribe(dogs => this.dogs = dogs.dogs)
    }
}