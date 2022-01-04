import { IColorsService } from '../models/IColorsService';
import { Color, NewColor } from '../models/colors';

let colors: Color[] = [
  { id: 1, name: 'red', hexcode: 'FF0000' },
  { id: 2, name: 'green', hexcode: '00FF00' },
  { id: 3, name: 'blue', hexcode: '0000FF' },    
];

export const simpleColors: IColorsService = {
  all() {
    return colors;
  },
  append(color: NewColor)  {
    colors = [...colors, {
      ...color,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }];
  },
};