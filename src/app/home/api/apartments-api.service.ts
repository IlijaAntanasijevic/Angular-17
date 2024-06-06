import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApartment } from '../interfaces/i-apartments';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsApiService {

  constructor(
    public http: HttpClient
  ) {}

  getAll(): Observable<IApartment[]> {
    return this.http.get<IApartment[]>("assets/data/favoriteApartments.json");
  }


}
