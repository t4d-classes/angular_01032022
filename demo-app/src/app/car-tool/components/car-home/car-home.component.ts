import { Component, OnInit } from '@angular/core';

import { Car, NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [
    {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color:'blue',
      price: 45000,
    },
    {
      id: 2,
      make: 'Tesla',
      model: 'S',
      year: 2020,
      color:'red',
      price: 120000,
    },
  ];

  editCarId = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doAppendCar(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      },
    ];
    this.editCarId = -1;
  }

  doReplaceCar(car: Car) {
    const newCars = [ ...this.cars ];
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    this.cars = newCars;
    this.editCarId = -1;
  }

  doRemoveCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    this.editCarId = -1;
  }

}

