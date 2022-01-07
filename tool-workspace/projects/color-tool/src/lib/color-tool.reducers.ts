import { createReducer, on } from '@ngrx/store';

import { Color } from './models/colors';

import { appendColor } from './color-tool.actions';

export const colorsReducer = createReducer<Color[]>(
  [
    { id: 1, name: 'yellow', hexcode: '00ffff' },
    { id: 2, name: 'orange', hexcode: 'ffff00' },
    { id: 3, name: 'purple', hexcode: 'ff00ff' },    
  ],
  on(appendColor, (state, action) => {

    return state.concat({
      ...action.color,
      id: Math.max(...state.map(c => c.id), 0) + 1,
    });

  }),
);