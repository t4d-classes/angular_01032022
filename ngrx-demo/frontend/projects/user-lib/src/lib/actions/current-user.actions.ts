import { createAction, props } from '@ngrx/store';

import { ICurrentUser } from '../models/CurrentUser';

export const setCurrentUser = createAction(
  '[User] Set Current User',
  props<{ currentUser: ICurrentUser }>(),
);

export const loginUser = createAction(
  '[User] Login User',
  props<{ username: string, password: string }>(),
);

export const logoutUser = createAction(
  '[User] Logout User',
);