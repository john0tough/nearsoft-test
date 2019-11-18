import { DogItem } from './models/dog-item.model';
import { Observable } from 'rxjs';
export enum DogStatus {
    ForAdoption = 0,
    Adopted
}
export abstract class DoggyService<T extends DogItem> {
    abstract getDogs(dogStatus: DogStatus): Observable<T[]>;
    abstract adoptDogs(dogsForAdoption: DogItem[]): Observable<T[]>;
}
