import { Observable } from 'rxjs';

export abstract class CheckoutService<T> {
    abstract addItem(item: T): void;
    abstract removeItem(item: T): void;
    abstract getCheckout(): Observable<T[]>;
}
