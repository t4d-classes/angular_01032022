import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { Car, NewCar } from '../../models/cars';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];

  editCarId = -1;

  constructor(private carsSvc: CarsService) {
  }

  ngOnInit(): void {
    this.carsSvc.all().subscribe({
      next: cars => {
        this.cars = cars;
      }
    });
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

  doAppendCar(car: NewCar) {

    // do not do it this way, look below
    // this.carsSvc.append(car).subscribe({
    //   next: () => {
    //     this.carsSvc.all().subscribe({
    //       next: cars => {
    //         this.cars = cars;
    //         this.editCarId = -1;
    //       }
    //     });
    //   }
    // });

    this.carsSvc
      .append(car)
      .pipe(
        switchMap(() => this.carsSvc.all())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        }
      });
  }

  doReplaceCar(car: Car) {

    this.carsSvc
      .replace(car)
      .pipe(
        switchMap(() => this.carsSvc.all())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        }
      });
  }

  doRemoveCar(carId: number) {
    this.carsSvc
      .remove(carId)
      .pipe(
        switchMap(() => this.carsSvc.all())
      )
      .subscribe({
        next: cars => {
          this.cars = cars;
          this.editCarId = -1;
        }
      });
  }

}
