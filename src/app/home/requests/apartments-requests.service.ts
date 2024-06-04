import { Injectable } from '@angular/core';
import { ApartmentsApiService } from '../api/apartments-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsRequestsService {
  constructor(
    private apiService: ApartmentsApiService
  ) { }


  getAll(): Observable<any>{
    return this.apiService.getAll();
  }
}
