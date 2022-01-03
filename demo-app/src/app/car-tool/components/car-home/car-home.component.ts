import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  make = "";

  makeControl = new FormControl('',
    { validators: [ Validators.required]});

  constructor() { }

  ngOnInit(): void {
    this.makeControl.valid
  }

}

