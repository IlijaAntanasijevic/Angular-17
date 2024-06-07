import { Component, Input, OnInit } from '@angular/core';
import { IReview } from '../../../interfaces/i-reviews';

@Component({
  selector: 'app-apartment-detail-reviews',
  templateUrl: './apartment-detail-reviews.component.html',
  styleUrl: './apartment-detail-reviews.component.css'
})
export class ApartmentDetailReviewsComponent implements OnInit {



  @Input() reviews: IReview[];


  ngOnInit(): void {
    console.log(this.reviews);
  }

  getRange(rate: number) {
    return Array.from({length: rate}, (_, i) => i + 1);
  }
  
}
