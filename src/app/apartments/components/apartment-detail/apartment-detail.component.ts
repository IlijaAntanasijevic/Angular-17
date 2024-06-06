import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentsRequestsService } from '../../requests/apartments-requests.service';
import { IApartmentDetail } from '../../interfaces/i-apartments';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrl: './apartment-detail.component.css'
})
export class ApartmentDetailComponent implements OnInit {

  id: number;
  apartment: IApartmentDetail;
  constructor(
    private route: ActivatedRoute,
    private requestService: ApartmentsRequestsService
  ){}


  
  ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.id);
      this.requestService.getOneApartment(this.id).subscribe({
        next: (data) => {
          this.apartment = data
          
        },
        error: (err) => {
          console.log(err);
          
        }
      })
     
      
  }

}
