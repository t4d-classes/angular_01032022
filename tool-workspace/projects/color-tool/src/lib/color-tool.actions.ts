import { createAction, props } from "@ngrx/store";

import { NewColor } from "./models/colors";

export const appendColor = createAction(
  "[ColorTool] Append Color", props<{ color: NewColor }>());