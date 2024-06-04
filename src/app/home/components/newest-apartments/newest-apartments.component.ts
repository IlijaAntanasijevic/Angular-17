import { Component, OnInit } from '@angular/core';
import { IApartment } from '../../interfaces/i-apartments';
import { ApartmentsRequestsService } from '../../requests/apartments-requests.service';

@Component({
  selector: 'app-newest-apartments',
  templateUrl: './newest-apartments.component.html',
  styleUrl: './newest-apartments.component.css'
})
export class NewestApartmentsComponent implements OnInit {
 
  constructor(
    public requestService: ApartmentsRequestsService
  ){}

  data: IApartment[] = [];
   
  ngOnInit(): void {
    this.requestService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
