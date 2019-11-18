import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DogItemComponent } from './dog-item/dog-item.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdoptDogItemComponent } from './adopt-dog-item/adopt-dog-item.component';
import { CheckoutDogItemComponent } from './checkout-dog-item/checkout-dog-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { APIClient } from './shared/contracts/http-client.service';
import { DoggyService } from './shared/contracts/doggy.service';
import { CheckoutService } from './shared/contracts/checkout.service';
import { DogsHttpClient } from './shared/dogs-http-client.service';
import { AdoptionDoggyService } from './shared/adoption-doggy.service';
import { AdoptionCheckoutService } from './shared/adoption-checkout.service';
@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        DogItemComponent,
        AdoptionsComponent,
        CheckoutComponent,
        AdoptDogItemComponent,
        CheckoutDogItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        { provide: APIClient, useClass: DogsHttpClient },
        { provide: DoggyService, useClass: AdoptionDoggyService },
        { provide: CheckoutService, useClass: AdoptionCheckoutService },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
