import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ApartmentsRequestsService } from '../../../requests/apartments-requests.service';
import { IApartmentDetail } from '../../../interfaces/i-apartments';
import { MatDialog } from '@angular/material/dialog';
import { ApartmentDetailFormComponent } from '../apartment-form/apartment-detail-form.component';

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
    private router: Router,
    private requestService: ApartmentsRequestsService,
    private dialog: MatDialog
  ){}
  

  ngOnInit(): void {
    this.fetchData();
    this.scrollToTop();
  }

  fetchData(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
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

  scrollToTop(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      })
  });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ApartmentDetailFormComponent, {
      data: {
        pricePerNight: this.apartment.price,
        totalPrice: 500,
        checkIn: "2024-01-01",
        checkOut: "2024-01-10"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.router.navigate(['/apartments']);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

}
