import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpClient } from './shared/contracts/http-client.service';
import { DogsHttpClient } from './shared/dogs-http-client.service';
import { MainPageComponent } from './main-page/main-page.component';
import { DogItemComponent } from './dog-item/dog-item.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DogItemComponent,
    AdoptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: httpClient, useClass: DogsHttpClient }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
