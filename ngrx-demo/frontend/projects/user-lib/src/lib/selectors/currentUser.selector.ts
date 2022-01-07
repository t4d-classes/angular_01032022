import { createSelector } from "@ngrx/store";

import { UserLibState } from "../user-lib.state";
import { UserProfile } from '../models/UserProfile';

export const selectCurrentUser = createSelector(
  // user must match the feature state name in the module
  (state: { user: UserLibState }) => state.user.currentUser,
  currentUser => currentUser,
);

export const selectCurrentUserProfile = createSelector(
  // user must match the feature state name in the module
  (state: { user: UserLibState }) => state.user.currentUser,
  currentUser => currentUser as UserProfile,
);


export const selectCurrentUserLoggedIn = createSelector(
  // user must match the feature state name in the module
  (state: { user: UserLibState }) => state.user.currentUser,
  currentUser => !!currentUser?.username,
);

export const selectCurrentUserDisplayName = createSelector(
  // user must match the feature state name in the module
  (state: { user: UserLibState }) => state.user.currentUser,
  currentUser => currentUser?.displayName,
);

export const selectCurrentUserUsername = createSelector(
  // user must match the feature state name in the module
  (state: { user: UserLibState }) => state.user.currentUser,
  currentUser => currentUser?.username,
);