import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-apartment-detail-form',
  templateUrl: './apartment-detail-form.component.html',
  styleUrl: './apartment-detail-form.component.css'
})
export class ApartmentDetailFormComponent implements OnInit {

  isBookingSuccessful: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<ApartmentDetailFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}


  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   console.log(this.data);
   
  }

  form: any = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", Validators .required)
  });


  save(): void {

    this.isBookingSuccessful = true;
    setTimeout(() => {
      this.close(true);
    },3000)
  }

  
  close(state: boolean = false): void {
    this.dialogRef.close(state);
  }


 

}
