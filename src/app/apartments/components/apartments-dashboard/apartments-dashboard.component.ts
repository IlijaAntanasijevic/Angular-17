import { Component, OnInit } from '@angular/core';
import { IApartment } from '../../interfaces/i-apartments';
import { ApartmentsRequestsService } from '../../requests/apartments-requests.service';
import { MatTableDataSource } from '@angular/material/table';

//TODO List apartments 
@Component({
  selector: 'app-apartments-dashboard',
  templateUrl: './apartments-dashboard.component.html',
  styleUrl: './apartments-dashboard.component.css'
})
export class ApartmentsDashboardComponent implements OnInit {

  constructor(private requestService: ApartmentsRequestsService) { }

  apartments: IApartment[];
  totalApartments: number;
  displayedApartments: IApartment[];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.requestService.getAll().subscribe({
      next: (data) => {
        this.apartments = data;
        this.totalApartments = data.length;
        this.displayedApartments = this.apartments.slice(0, 9); 
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onPageChange(apartments: IApartment[]): void {
    this.displayedApartments = apartments;
    window.scrollTo({
      top: 0,
      left: 0
    })
  }
}