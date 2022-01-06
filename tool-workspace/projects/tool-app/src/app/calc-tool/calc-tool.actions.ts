import { createAction, props } from '@ngrx/store';

export const add = createAction('[CalcTool] Add', props<{ value: number}>());
export const subtract = createAction('[CalcTool] Subtract', props<{ value: number}>());