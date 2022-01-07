import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CarToolState } from './car-tool.state';

export const selectFeature = createFeatureSelector<CarToolState>('carTool');

export const selectCars = createSelector(
  selectFeature,
  (state: CarToolState) => state.cars,
);

export const selectEditCarId = createSelector(
  selectFeature,
  (state: CarToolState) => state.editCarId,
);
