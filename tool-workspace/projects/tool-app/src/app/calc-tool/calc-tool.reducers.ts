import { createReducer, on } from '@ngrx/store';

import { add, subtract, multiply, divide, clear, setErrorMessage, clearErrorMessage } from './calc-tool.actions';
import { HistoryEntry } from './models/history';

export const resultReducer = createReducer<number>(
  0,
  on(add, (state, action) => {
    return state + action.value;
  }),
  on(subtract, (state, action) => {
    return state - action.value;
  }),  
  on(multiply, (state, action) => {
    return state * action.value;
  }),
  on(divide, (state, action) => {
    return state / action.value;
  }),  
  on(clear, (state, action) => {
    return 0;
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
  on(multiply, (state, action) => {
    return state.concat({
      id: Math.max(...state.map(entry => entry.id), 0) + 1,
      opName: 'Multiply',
      opValue: action.value
    });
  }),
  on(divide, (state, action) => {
    return state.concat({
      id: Math.max(...state.map(entry => entry.id), 0) + 1,
      opName: 'Divide',
      opValue: action.value
    });
  }),
  on(clear, (state, action) => {
    return [];
  }),
);

export const errorMessageReducer = createReducer<string>(
  "",
  on(setErrorMessage, (state, action) => {
    return action.message;
  }),
  on(clearErrorMessage, (state, action) => {
    return "";
  }),
);
