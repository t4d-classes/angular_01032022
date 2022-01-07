import { createSelector } from '@ngrx/store';

import { SharedLibState } from '../shared-lib.state';
 
export const selectErrorMessage = createSelector(
  // shared must match the feature state name in the module
  (state: { shared: SharedLibState }) => state.shared.errorMessage,
  (errorMessage: string) => errorMessage,
);