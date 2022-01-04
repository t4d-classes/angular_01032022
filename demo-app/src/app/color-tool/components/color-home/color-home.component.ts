import { Component, OnInit } from '@angular/core';

import { Color } from '../../models/colors';

import { ColorsService } from '../../services/colors.service';

@Component({
  // css selector
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css'],
})
export class ColorHomeComponent implements OnInit {

  colors: Color[] = [];  

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit(): void {
    this.colors = this.colorsSvc.all();
  }

  doAddColor(color: Color)  {
    this.colorsSvc.append(color);
    this.colors = this.colorsSvc.all();
  }

}
