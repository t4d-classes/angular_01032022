import { Injectable } from '@angular/core';

import { Color, NewColor } from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private colors: Color[] = [
    { id: 1, name: 'yellow', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },    
  ];

  constructor() { }

  all() {
    return this.colors;
  }
  
  append(color: NewColor)  {
    this.colors = [...this.colors, {
      ...color,
      id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    }];
  }
}
