import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';



@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css',
  providers: [provideNativeDateAdapter()],
})
export class HeadComponent {

  totalNights: number | null = null;
  minDate: Date = new Date();

  form = new FormGroup({
    start:  new FormControl(),
    end: new FormControl(),
  });

 
  calculateTotalNights(){
    let startDate = this.form.controls.start.value;
    let endDate = this.form.controls.end.value;

    if(startDate !== null && endDate !== null){
      let dateDifference = new Date(endDate).getTime() - new Date(startDate).getTime();
      this.totalNights = dateDifference / (1000 * 60 * 60 * 24);
    
    }
    
    
    
  }

}
