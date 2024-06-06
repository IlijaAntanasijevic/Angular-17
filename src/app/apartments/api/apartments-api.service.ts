import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { IApartment, IApartmentDetail } from '../interfaces/i-apartments';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsApiService {

  constructor(
    public http: HttpClient
  ) {}

  getAll(topRated: boolean = false): Observable<IApartment[]> {
    if(topRated){
      return this.http.get<IApartment[]>("assets/data/favoriteApartments.json");
    }

    return this.http.get<IApartment[]>("assets/data/apartments.json");
  }

  getOne(id: number): Observable<IApartmentDetail>{
    return this.http.get<IApartmentDetail>("assets/data/apartmentsDetails.json").pipe(map((apartments: any) => {
      let findApartment = apartments.find((x: any) => x.id == id);
      return findApartment;
    }));
  }


}
