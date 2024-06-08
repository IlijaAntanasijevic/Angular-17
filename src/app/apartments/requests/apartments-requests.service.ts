import { Injectable } from '@angular/core';
import { ApartmentsApiService } from '../api/apartments-api.service';
import { Observable } from 'rxjs';
import { IApartment, IApartmentDetail } from '../interfaces/i-apartments';
import { ISearch } from '../interfaces/i-search';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsRequestsService {
  constructor(
    private apiService: ApartmentsApiService
  ) { }


  getTopRated(): Observable<IApartment[]>{
    return this.apiService.getAll(true);
  }

  getAll(search: ISearch = null): Observable<IApartment[]>{
    if(search){
      return this.apiService.getSearchedData(search);
    }
    return this.apiService.getAll();
  }

  getOneApartment(id: number): Observable<IApartmentDetail> {
    return this.apiService.getOne(id);
  }
}
