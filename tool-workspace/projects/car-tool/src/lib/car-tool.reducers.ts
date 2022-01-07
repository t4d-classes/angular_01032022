import { createReducer, on } from '@ngrx/store';

import { Car } from './models/cars';

import { refreshCarsDone, editCar, cancelCar } from './car-tool.actions';

export const carsReducer = createReducer<Car[]>(
  [],
  on(refreshCarsDone, (state, action) => {
    return action.cars;
  }),
);

export const editCarIdReducer = createReducer<number>(
  -1,
  on(refreshCarsDone, cancelCar, () => {
    return -1;
  }),
  on(editCar, (_, action) => action.carId),
);