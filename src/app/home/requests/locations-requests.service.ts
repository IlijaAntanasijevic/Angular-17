import { Injectable } from '@angular/core';
import { LocationsApiService } from '../api/locations-api.service';
import { Observable } from 'rxjs';
import { ILocation } from '../interfaces/i-location';

@Injectable({
  providedIn: 'root'
})
export class LocationsRequestsService {

  constructor(
    private apiService: LocationsApiService
  ) { }


  getAll(): Observable<any>{
    return this.apiService.getAll();
  }
}
