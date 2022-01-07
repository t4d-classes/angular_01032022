import { createReducer, on } from '@ngrx/store';

import { Color } from './models/colors';

import { appendColor, refreshColorsDone } from './color-tool.actions';

export const colorsReducer = createReducer<Color[]>(
  [],
  on(refreshColorsDone, (state, action) => {
    return action.colors;
  }),
  on(appendColor, (state, action) => {

    return state.concat({
      ...action.color,
      id: Math.max(...state.map(c => c.id), 0) + 1,
    });

  }),
);