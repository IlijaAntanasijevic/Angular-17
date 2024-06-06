import { Component, OnInit } from '@angular/core';
import { IApartment } from '../../interfaces/i-apartments';
import { ApartmentsRequestsService } from '../../requests/apartments-requests.service';

@Component({
  selector: 'app-top-rated-apartments',
  templateUrl: './top-rated-apartments.html',
  styleUrl: './top-rated-apartments.css'
})
export class TopRatedApartments implements OnInit {
 
  constructor(
    public requestService: ApartmentsRequestsService
  ){}

  data: IApartment[] = [];
   
  ngOnInit(): void {
    this.requestService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        // console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
