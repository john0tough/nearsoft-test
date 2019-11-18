import { DoggyService, DogStatus } from './contracts/doggy.service';
import { APIClient } from './contracts/http-client.service';
import { DogItem } from './contracts/models/dog-item.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AdoptionDoggyService implements DoggyService<DogItem> {
    constructor(private client: APIClient) { }

    getDogs(dogStatus: DogStatus): Observable<DogItem[]> {
        switch (dogStatus) {
            case DogStatus.Adopted:
                return this.getAdoptionInformation(
                    '/dogs/adoptions',
                    this.mapToAdoptedDog
                ).pipe(tap(r => console.log(r)));
            case DogStatus.ForAdoption:
                return this.getAdoptionInformation(
                    '/dogs',
                    this.mapToDog
                );

        }
    }

    adoptDogs(dogsForAdoption: DogItem[]): Observable<DogItem[]> {
        return this.client.post<{ dogs: DogItem[] }>(
            '/dogs/adopt',
            {
                dogs: dogsForAdoption
            }
        ).pipe(
            map(response => response.dogs)
        );
    }

    private mapToDog = (response: { dogs: DogItem[] }): DogItem[] => response.dogs;
    private mapToAdoptedDog = (response: { adoptions: DogItem[] }): DogItem[] => {console.log(response);return response.adoptions};

    private getAdoptionInformation<T>(
        resource: string,
        mapFunc: (response: T) => DogItem[]
    ): Observable<DogItem[]> {
        return this.client.get<T>(resource).pipe(
            map(mapFunc));
    }
}