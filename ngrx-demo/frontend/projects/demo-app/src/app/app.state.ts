import { SharedLibState } from '@t4d-wnow-fullstack-angular11/shared-lib';
import { UserLibState } from '@t4d-wnow-fullstack-angular11/user-lib';

export interface AppState {
  shared: SharedLibState,
  user: UserLibState,
}