import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrl: './apartment-detail.component.css'
})
export class ApartmentDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ){}

  id: any;
  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      
  }

}
