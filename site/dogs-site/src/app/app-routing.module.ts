import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: 'dogs', component: MainPageComponent },
  { path: 'adoptions', component: AdoptionsComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: '',
    redirectTo: '/dogs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
