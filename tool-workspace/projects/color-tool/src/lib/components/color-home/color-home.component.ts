import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ColorToolState } from '../../color-tool.state';

import { NewColor } from '../../models/colors';

import { appendColor } from '../../color-tool.actions';
import { selectColors } from '../../color-tool.selectors';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {

  colors$ = this.store.pipe(select(selectColors));

  constructor(
    private store: Store<ColorToolState>) { }
    
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  doAddColor(color: NewColor)  {
    this.store.dispatch(appendColor({ color }));
  }

}
