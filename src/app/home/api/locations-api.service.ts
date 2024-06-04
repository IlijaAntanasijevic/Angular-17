import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from '../interfaces/i-location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsApiService {

  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<ILocation[]>{
    return this.http.get<ILocation[]>("assets/data/locations.json");
  }
  
}
