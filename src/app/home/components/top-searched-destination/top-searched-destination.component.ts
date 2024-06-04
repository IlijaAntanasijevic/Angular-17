import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-searched-destination',
  templateUrl: './top-searched-destination.component.html',
  styleUrl: './top-searched-destination.component.css'
})
export class TopSearchedDestinationComponent implements OnInit{

  destinations: any = [];


  ngOnInit(): void {
      this.getDestinations();
  }

  getDestinations(): void {
    this.destinations = [
      {
        id: 1,
        title: "Venecie",
        totalApartments: 220,
        image: "assets/imgs/page/homepage6/destination.png"
      },
      {
        id: 2,
        title: "Amsterdam",
        totalApartments: 120,
        image: "assets/imgs/page/homepage6/destination.png"
      },
      {
        id: 3,
        title: "Budapest",
        totalApartments: 356,
        image: "assets/imgs/page/homepage6/destination.png"
      },
      {
        id: 4,
        title: "Lisbon",
        totalApartments: 420,
        image: "assets/imgs/page/homepage6/destination.png"
      },
      {
        id: 5,
        title: "London",
        totalApartments: 330,
        image: "assets/imgs/page/homepage6/destination.png"
      },
      {
        id: 6,
        title: "Ottawa",
        totalApartments: 220,
        image: "assets/imgs/page/homepage6/destination.png"
      },
      {
        id: 7,
        title: "Paris",
        totalApartments: 220,
        image: "assets/imgs/page/homepage6/destination.png"
      },
      {
        id: 8,
        title: "Nice",
        totalApartments: 220,
        image: "assets/imgs/page/homepage6/destination.png"
      }
    ]
  }

}
