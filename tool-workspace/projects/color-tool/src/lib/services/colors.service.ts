import { Injectable } from '@angular/core';

import { Color, NewColor } from '../models/colors';

@Injectable()
export class ColorsService2 {

  private colors: Color[] = [
    { id: 1, name: 'yellow', hexcode: '00ffff' },
    { id: 2, name: 'orange', hexcode: 'ffff00' },
    { id: 3, name: 'purple', hexcode: 'ff00ff' },    
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



// @Injectable({
//   providedIn: 'root',
//   useClass: ColorsService2,
// })
@Injectable()
export class ColorsService {

  private colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
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


