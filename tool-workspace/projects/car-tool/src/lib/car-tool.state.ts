

import { Car } from './models/cars';

export interface CarToolState {
  cars: Car[];
  editCarId: number;
}