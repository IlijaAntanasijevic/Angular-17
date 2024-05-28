import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-searched-destination',
  templateUrl: './top-searched-destination.component.html',
  styleUrl: './top-searched-destination.component.css'
})
export class TopSearchedDestinationComponent implements OnInit{

  destinations: any = [];

  constructor(
    private http: HttpClient
  ){ }

  ngOnInit(): void {
      this.getDestinations();
  }

  getDestinations(): void {
   this.http.get("assets/data/topSearchedDestinations.json").subscribe({
      next: (data) => {
        this.destinations = data;
      }
    })
  }
}
