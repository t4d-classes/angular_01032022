import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  result = 0;

  numInput = new FormControl(0);

  constructor() { }

  ngOnInit(): void {
  }

  doAdd() {

  }

  doSubtract() {
    
  }

}
