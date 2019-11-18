import { DogItem } from './dog-item.model';

export interface AdoptionDogItem extends DogItem {
    isAdopted: boolean;
}
