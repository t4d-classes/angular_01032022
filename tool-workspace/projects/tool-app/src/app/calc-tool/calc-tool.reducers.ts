import { createReducer, on } from '@ngrx/store';

import { add, subtract } from './calc-tool.actions';

export const resultReducer = createReducer<number>(
  0,
  on(add, (state, action) => {
    return state + action.value;
  }),
  on(subtract, (state, action) => {
    return state - action.value;
  }),  
);