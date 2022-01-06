import { Component, OnInit, Inject } from '@angular/core';

import { Color } from '../../models/colors';

import { IColorsService } from '../../models/IColorsService';
import { COLORS_SERVICE_TOKEN } from '../../tokens/colorsService';

@Component({
  // css selector
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {

  colors: Color[] = [];  

  constructor(
    @Inject(COLORS_SERVICE_TOKEN)
    private colorsSvc: IColorsService) { }

  ngOnInit(): void {
    this.colors = this.colorsSvc.all();
  }

  doAddColor(color: Color)  {
    this.colorsSvc.append(color);
    this.colors = this.colorsSvc.all();
  }

}
