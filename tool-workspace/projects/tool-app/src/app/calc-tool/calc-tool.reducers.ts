import { createReducer, on } from '@ngrx/store';

import {
  add, subtract, multiply, divide, clear, deleteHistoryEntry,
} from './calc-tool.actions';

import { HistoryEntry } from './models/history';

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
  on(multiply, (state, action) => {
    return state.concat({
      id: Math.max(...state.map(entry => entry.id), 0) + 1,
      opName: 'Multiply',
      opValue: action.value
    });
  }),
  on(divide, (state, action) => {
    if (action.value === 0) {
      return state;
    }
    return state.concat({
      id: Math.max(...state.map(entry => entry.id), 0) + 1,
      opName: 'Divide',
      opValue: action.value
    });
  }),
  on(clear, (state, action) => {
    return [];
  }),
  on(deleteHistoryEntry, (state, action) => {
    return state.filter(entry => entry.id !== action.historyEntryId);
  }),
);

