import { createSelector, createFeatureSelector } from '@ngrx/store';

import { CalcToolState } from './calc-tool.state';

export const selectFeature = createFeatureSelector<CalcToolState>('calcTool');

export const selectHistory = createSelector(
  selectFeature,
  (state: CalcToolState) => state.history,
);

export const selectResult = createSelector(
  selectFeature,
  (state: CalcToolState) => {

    return state.history.reduce( (result, entry) => {

      switch (entry.opName) {
        case 'Add':
          return result + entry.opValue;
        case 'Subtract':
          return result - entry.opValue;
        case 'Multiply':
          return result * entry.opValue;
        case 'Divide':
          return result / entry.opValue;
        default:
          return result;
      }

    }, 0);

  },
);