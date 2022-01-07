import { createAction, props } from "@ngrx/store";

import { Car, NewCar } from "./models/cars";

export const refreshCarsRequest = createAction(
  '[CarTool] Refresh Cars Request');

export const refreshCarsDone = createAction(
  '[CarTool] Refresh Cars Done',
  props<{ cars: Car[] }>());

export const appendCarRequest = createAction(
  '[CarTool] Append Car Request', props<{ car: NewCar }>());

export const replaceCarRequest = createAction(
  '[CarTool] Replace Car Request', props<{ car: Car }>());

export const removeCarRequest = createAction(
  '[CarTool] Remove Car Request', props<{ carId: number }>());

export const editCar = createAction(
  "[CarTool] Edit Car", props<{ carId: number }>());

export const cancelCar = createAction(
  "[CarTool] Cancel Car");  