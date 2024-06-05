import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentsRoutingModule } from './apartments-routing.module';
import { ApartmentsDashboardComponent } from './apartments-dashboard/apartments-dashboard.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';


@NgModule({
  declarations: [
    ApartmentsDashboardComponent,
    ApartmentDetailComponent
  ],
  imports: [
    CommonModule,
    ApartmentsRoutingModule
  ]
})
export class ApartmentsModule { }
