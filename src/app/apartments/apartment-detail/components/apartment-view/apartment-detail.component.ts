import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentsRequestsService } from '../../../requests/apartments-requests.service';
import { IApartmentDetail } from '../../../interfaces/i-apartments';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrl: './apartment-detail.component.css'
})
export class ApartmentDetailComponent implements OnInit {
  id: number;
  apartment: IApartmentDetail;
  sliderImages: any;
  constructor(
    private route: ActivatedRoute,
    private requestService: ApartmentsRequestsService
  ){}
  

  
  ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.id);
      this.requestService.getOneApartment(this.id).subscribe({
        next: (data) => {
          this.apartment = data;
          this.sliderImages = data.images.slice(0,4);
          
        },
        error: (err) => {
          console.log(err);
          
        }
      })
     
      
  }

}
