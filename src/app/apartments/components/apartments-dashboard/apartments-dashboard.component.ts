import { Component, OnInit } from '@angular/core';
import { IApartment } from '../../interfaces/i-apartments';
import { ApartmentsRequestsService } from '../../requests/apartments-requests.service';

//TODO Pagination 
//TODO List apartments 
@Component({
  selector: 'app-apartments-dashboard',
  templateUrl: './apartments-dashboard.component.html',
  styleUrl: './apartments-dashboard.component.css'
})
export class ApartmentsDashboardComponent implements OnInit {

  constructor(
    private requestService: ApartmentsRequestsService
  ){}

  apartments: IApartment[];
  totalApartments: number;

  ngOnInit(): void {
    this.requestService.getAll().subscribe({
      next: (data) => {
        this.apartments = data;
        this.totalApartments = data.length;
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })

  }


}
