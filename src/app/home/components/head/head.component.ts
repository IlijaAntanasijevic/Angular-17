import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { map, Observable, startWith } from 'rxjs';
import { ILocation } from '../../interfaces/i-location';
import { LocationsRequestsService } from '../../requests/locations-requests.service';


interface Food {
  value: number;
}

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css',
  providers: [provideNativeDateAdapter()],
})
export class HeadComponent implements OnInit {

  public totalGuests: number[] = [1,2,3,4,5,6,7,8,9,10];
  constructor(
    public requestService: LocationsRequestsService
  ){}



  locationControl = new FormControl<string | ILocation>('');
  options: ILocation[] = [];
  filteredOptions: Observable<ILocation[]>;

  totalNights: number | null = null;
  minDate: Date = new Date();

  form: any = new FormGroup({
    start:  new FormControl(),
    end: new FormControl(),
    guests: new FormControl(1)
  });

  ngOnInit() {
    this.requestService.getAllLocations().subscribe({
      next: (data) => {
        this.options = data  
        this.initializeFilteredOptions();      
      },
      error: (error) => {
        console.log(error);
        
      }
    })
  }

  private initializeFilteredOptions(): void {
    this.filteredOptions = this.locationControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this.filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(location: ILocation): string {  
    return location && location.name ? location.name : '';
  }

  private filter(name: string): ILocation[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

 
  calculateTotalNights(){
    let startDate = this.form.controls.start.value;
    let endDate = this.form.controls.end.value;

    if(startDate !== null && endDate !== null){
      let dateDifference = new Date(endDate).getTime() - new Date(startDate).getTime();
      this.totalNights = dateDifference / (1000 * 60 * 60 * 24);
    
    }  
    
    
    
  }


  public save(): void {
    console.log(this.form.value);
    console.log(this.locationControl.value);
    
  }

}
