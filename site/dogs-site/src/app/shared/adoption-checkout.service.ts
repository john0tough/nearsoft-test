import { CheckoutService } from './contracts/checkout.service';
import { DogItem } from './contracts/models/dog-item.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AdoptionCheckoutService extends CheckoutService<DogItem> {
    private chechout$ = new BehaviorSubject<DogItem[]>([]);
    private items: DogItem[] = [];
    getCheckout(): Observable<DogItem[]> {
        return this.chechout$;
    }

    addItem(item: DogItem): void {
        this.items.push(item);
        this.chechout$.next(this.items);
    }

    removeItem(item: DogItem): void {
        this.items = this.items.filter(i => i.id !== item.id);
        this.chechout$.next(this.items);
    }
}
