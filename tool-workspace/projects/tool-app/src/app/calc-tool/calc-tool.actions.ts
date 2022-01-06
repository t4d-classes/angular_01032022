import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[CalcTool] Add',
  props<{ value: number }>(),
);

export const subtract = createAction(
  '[CalcTool] Subtract',
  props<{ value: number }>(),
);

export const multiply = createAction(
  '[CalcTool] Multiply',
  props<{ value: number }>(),
);

export const divide = createAction(
  '[CalcTool] Divide',
  props<{ value: number }>(),
);

export const clear = createAction(
  '[CalcTool] Clear',
);

export const deleteHistoryEntry = createAction(
    '[CalcTool] Delete History Entry',
    props<{ historyEntryId: number }>(),
);
