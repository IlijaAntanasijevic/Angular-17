import { Injectable } from '@angular/core';
import { ApartmentsApiService } from '../api/apartments-api.service';
import { Observable } from 'rxjs';
import { IApartment } from '../interfaces/i-apartments';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsRequestsService {
  constructor(
    private apiService: ApartmentsApiService
  ) { }


  getAll(): Observable<IApartment[]>{
    return this.apiService.getAll();
  }

  getOneApartment(id: number): Observable<any> {
    return this.apiService.getAll();

  }
}
