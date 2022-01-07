import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Car, NewCar } from '../../models/cars';
import { CarsService } from '../../services/cars.service';
import {
  refreshCarsRequest, appendCarRequest, replaceCarRequest,
  removeCarRequest, editCar, cancelCar } from '../../car-tool.actions';
import { CarToolState } from '../../car-tool.state';
import { selectCars, selectEditCarId } from '../../car-tool.selectors';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  cars$ = this.store.select(selectCars);

  editCarId$ = this.store.select(selectEditCarId);

  constructor(private store: Store<CarToolState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(refreshCarsRequest())
  }

  doEditCar(carId: number) {
    this.store.dispatch(editCar({ carId }));
  }

  doCancelCar() {
    this.store.dispatch(cancelCar());
  }

  doAppendCar(car: NewCar) {
    this.store.dispatch(appendCarRequest({ car }));
  }

  doReplaceCar(car: Car) {
    this.store.dispatch(replaceCarRequest({ car }));
  }

  doRemoveCar(carId: number) {
    this.store.dispatch(removeCarRequest({ carId }));
  }

}
