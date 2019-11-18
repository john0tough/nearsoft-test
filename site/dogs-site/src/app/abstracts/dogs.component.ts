import { DogItem } from '../shared/contracts/models/dog-item.model';
import { Observable, Subscription } from 'rxjs';

export abstract class DogsComponent {
    dogs: DogItem[] = [];
    private subscription: Subscription;
    constructor(dogs$: Observable<DogItem[]>) {
        this.subscription = dogs$.subscribe(dogs => this.dogs = dogs );
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
