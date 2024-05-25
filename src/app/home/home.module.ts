import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TopSearchedDestinationComponent } from './components/top-searched-destination/top-searched-destination.component';
import { HeadComponent } from './components/head/head.component';
import { NewestApartmentsComponent } from './components/newest-apartments/newest-apartments.component';
import { TrendingDestinationsComponent } from './components/trending-destination/trending-destinations.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopSearchedDestinationComponent,
    HeadComponent,
    NewestApartmentsComponent,
    TrendingDestinationsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
