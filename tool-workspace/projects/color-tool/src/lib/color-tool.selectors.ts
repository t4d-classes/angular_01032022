import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ColorToolState } from './color-tool.state';

export const selectFeature = createFeatureSelector<ColorToolState>('colorTool');

export const selectColors = createSelector(
  selectFeature,
  (state: ColorToolState) => state.colors,
);

