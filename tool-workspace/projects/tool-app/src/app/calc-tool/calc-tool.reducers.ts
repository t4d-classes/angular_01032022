import { createReducer, on } from '@ngrx/store';

import { add, subtract, multiply, divide, clear, setErrorMessage, clearErrorMessage } from './calc-tool.actions';
import { HistoryEntry } from './models/history';

const doOp = (
  state: { value: number, errorMessage: string },
  errorMessage: string, value: number) => {
  return {
    ...state,
    errorMessage,
    value,
  };
};

export const resultReducer = createReducer<{ value: number, errorMessage: string}>(
  { value: 0, errorMessage: '' },
  on(add, (state, action) => {
    return doOp(state, '', state.value + action.value);
  }),
  on(subtract, (state, action) => {
    return doOp(state, '', state.value - action.value);
  }),  
  on(multiply, (state, action) => {
    return doOp(state, '', state.value * action.value);
  }),
  on(divide, (state, action) => {
    if (action.value === 0) {
      return doOp(state, 'Divide by zero', state.value);
    }
    return doOp(state, '', state.value / action.value);
  }),  
  on(clear, (state, action) => {
    return doOp(state, '', 0);
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
);

