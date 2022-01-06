import { createReducer, on } from '@ngrx/store';

import { add, subtract } from './calc-tool.actions';
import { HistoryEntry } from './models/history';

export const resultReducer = createReducer<number>(
  0,
  on(add, (state, action) => {
    return state + action.value;
  }),
  on(subtract, (state, action) => {
    return state - action.value;
  }),  
);

export const historyReducer = createReducer<HistoryEntry[]>(
  [],
  on(add, (state, action) => {
    return state.concat({
      id: Math.max(...state.map(entry => entry.id), 0) + 1,
      opName: 'Add',
      opValue: action.value
    });
  }),
  on(subtract, (state, action) => {
    return state.concat({
      id: Math.max(...state.map(entry => entry.id), 0) + 1,
      opName: 'Subtract',
      opValue: action.value
    });
  }),  
)