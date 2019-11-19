import { AdoptionCheckoutService } from "../adoption-checkout.service";
import { DogItem } from '../contracts/models/dog-item.model';
import { filter } from 'rxjs/operators';

describe('adoption-checkout.service', () => {
    it('should be created', () => {
        const service = new AdoptionCheckoutService();
        expect(service).toBeTruthy();
    });
    it('should add a value to checkout', () => {
        const service = new AdoptionCheckoutService();
        const val1 = { id: '1'} as DogItem;
        const val2 = { id: '2'} as DogItem;
        let cont = 0;
        service.getCheckout().pipe(filter(item => item.length > 0)).subscribe(values => {
            cont += 1;
            if (cont === 1) {
                expect(values).toEqual([val1]);
            }

            if (cont === 2) {
                expect(values).toEqual([val1, val2]);
            }
        });
        service.addItem(val1);
        service.addItem(val2);
    });
    it('should remove a value to checkout', () => {
        const service = new AdoptionCheckoutService();
        const val1 = { id: '1'} as DogItem;
        const val2 = { id: '2'} as DogItem;
        let cont = 0;
        service.getCheckout().pipe(filter(item => item.length > 0)).subscribe(values => {
            cont += 1;
            if (cont === 3) {
                expect(values).toEqual([val2]);
            }
        });
        service.addItem(val1);
        service.addItem(val2);
        service.removeItem(val1);
    });
});
