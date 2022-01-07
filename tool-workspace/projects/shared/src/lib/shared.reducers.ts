
import { setErrorMessage } from "./shared.actions";

// s' = reducer(s, a);

// export type ErrorMessageReducerFn = (
//   errorMessage: string,
//   action: { type: string, message?: string },
// ) => string;
 
export const errorMessageReducer = (
  errorMessage = "",
  action: { type: string, message?: string },
) => {

  if (action.type === setErrorMessage.type && action.message) {
    return action.message;
  }

  return '';

};
