import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs';

import { setErrorMessage } from "shared";
import {
  refreshCarsRequest, refreshCarsDone,
  appendCarRequest, replaceCarRequest, removeCarRequest } from "./car-tool.actions";
import { Car } from "./models/cars";
import { CarsService } from "./services/cars.service";

@Injectable({
  providedIn: 'any',
})
export class CarToolEffects {

  constructor(
    private carsSvc: CarsService,
    private actions$: Actions,
  ) { }

  refreshCars$ = createEffect(() => this.actions$.pipe(
    ofType(refreshCarsRequest),
    switchMap(() => {
      return this.carsSvc.all()
        .pipe(
          map(cars => refreshCarsDone({ cars })),
          catchError(err => of(setErrorMessage({ message: err.message })))
        )
    })
  ));

  appendCar$ = createEffect(() => this.actions$.pipe(
    ofType(appendCarRequest),
    switchMap((action) => {
      return this.carsSvc.append(action.car)
        .pipe(
          map(() => refreshCarsRequest()),
          catchError(err => of(setErrorMessage({ message: err.message })))
        )
    })
  ));

  replaceCar$ = createEffect(() => this.actions$.pipe(
    ofType(replaceCarRequest),
    switchMap((action) => {
      return this.carsSvc.replace(action.car)
        .pipe(
          map(() => refreshCarsRequest()),
          catchError(err => of(setErrorMessage({ message: err.message })))
        )
    })
  ));

  removeCar$ = createEffect(() => this.actions$.pipe(
    ofType(removeCarRequest),
    switchMap((action) => {
      return this.carsSvc.remove(action.carId)
        .pipe(
          map(() => refreshCarsRequest()),
          catchError(err => of(setErrorMessage({ message: err.message })))
        )
    })
  ));


}