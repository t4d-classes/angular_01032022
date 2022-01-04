import { Color, NewColor } from "./colors";

export interface IColorsService {
  all(): Color[];
  append(color: NewColor): void;
}