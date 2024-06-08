import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../../../pipes/full-name.pipe';
import { ApartmentBookingComponent } from './components/apartment-booking/apartment-booking.component';
import { SharedModule } from '../../shared/shared.module';


//TODO?? - Fix view all photos / Slider??

//TODO - Apartment detail without selected dates????
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FullNamePipe,
    SharedModule
  ]
})
export class ApartmentDetailModule { }
