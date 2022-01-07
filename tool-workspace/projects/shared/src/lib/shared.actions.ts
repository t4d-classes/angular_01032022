import { createAction, props, Action } from "@ngrx/store";

// export class ErrorMessageAction implements Action {
//   readonly type = "[Shared] Set Error Message";

//   constructor(public message: string) { }
// }

export const setErrorMessage = createAction(
  '[Shared] Set Error Message',
  props<{ message: string }>(),
);

