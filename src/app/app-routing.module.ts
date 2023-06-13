import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteriesComponent } from './batteries/batteries.component';
import { PricingComponent } from './pricing/pricing.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: BatteriesComponent,
    title: 'Home'
  },
  {
    path: 'details/:hash',
    component: DetailsComponent,
    title: 'Details'
  },
  {
    path: 'pricing',
    component: PricingComponent,
    title: 'Pricing'
  },
  {
    path: 'features',
    component: PricingComponent,
    title: 'Features'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
