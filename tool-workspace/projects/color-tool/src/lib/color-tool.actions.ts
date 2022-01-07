import { createAction, props } from "@ngrx/store";

import { Color, NewColor } from "./models/colors";

export const refreshColorsRequest = createAction(
  '[ColorTool] Refresh Colors Request');

export const refreshColorsDone = createAction(
  '[ColorTool] Refresh Colors Done',
  props<{ colors: Color[] }>());


export const appendColor = createAction(
  "[ColorTool] Append Color", props<{ color: NewColor }>());