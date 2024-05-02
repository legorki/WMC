import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http:HttpClient
  ) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>("http://localhost:3000/");
  }

  postCars(url:string, cars:string[]):Observable<any> {
    return this.http.post(url, cars)
  }

}
