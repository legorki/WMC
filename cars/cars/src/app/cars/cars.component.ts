import { Component } from '@angular/core';
import { CarsService } from './cars.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Car } from './car';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars:Car[] = [];

  constructor(private carsService:CarsService) {
  }

  getCars():void {
    this.carsService.getCars().subscribe(cars => this.cars = cars)
  }

  postCars():void{
    var selected:string[] = []
    this.cars.map((car) => {
      if(car.checked){
        selected.push(car.make);
      }
    })
    console.log(selected)
    this.carsService.postCars("http://localhost:3000/", selected).subscribe()
  }

  ngOnInit(): void {
    this.getCars()
  }
}
