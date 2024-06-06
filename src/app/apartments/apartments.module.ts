import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentsRoutingModule } from './apartments-routing.module';
import { ApartmentsDashboardComponent } from './components/apartments-dashboard/apartments-dashboard.component';
import { ApartmentDetailComponent } from './components/apartment-detail/apartment-detail.component';
import { ApartmentDetailReviewsComponent } from './components/apartment-detail-reviews/apartment-detail-reviews.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    ApartmentsDashboardComponent,
    ApartmentDetailComponent,
    ApartmentDetailReviewsComponent
  ],
  imports: [
    CommonModule,
    ApartmentsRoutingModule,
    NgImageSliderModule
  ]
})
export class ApartmentsModule { }
