import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApartmentDetailFormComponent } from '../apartment-form/apartment-detail-form.component';
import { Router } from '@angular/router';
import { IApartment } from '../../../interfaces/i-apartments';
import { SearchService } from '../../../services/search-service.service';
import { ISearch } from '../../../interfaces/i-search';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apartment-booking',
  templateUrl: './apartment-booking.component.html',
  styleUrl: './apartment-booking.component.css'
})
export class ApartmentBookingComponent implements OnInit {

  @Input() apartment: IApartment
  searched: ISearch
  
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private searchService: SearchService
  ){}

  /*
form = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    guests: new FormControl(1),
    location: new FormControl<string | ILocation>('', Validators.required)
  });
  */



  ngOnInit(): void {
    this.searched = this.searchService.getData;      
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
