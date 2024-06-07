import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../../../pipes/full-name.pipe';


//TODO - Fix view all photos / Slider??
//TODO - What place offers?? / JSON, Interface,...

//TODO - Apartment detail without selected dates????
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FullNamePipe
  ]
})
export class ApartmentDetailModule { }
