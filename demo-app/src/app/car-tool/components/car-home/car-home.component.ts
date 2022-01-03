import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css'],
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [
    {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color:'blue',
      price: 45000,
    },
  ];

  carForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.carForm = this.fb.group({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });   

  }

  addCar() {

    this.cars = [
      ...this.cars,
      {
        ...this.carForm.value,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      },
    ];

  }

}

