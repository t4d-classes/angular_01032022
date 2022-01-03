import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  make = "";

  constructor() { }

  ngOnInit(): void {
  }

}

