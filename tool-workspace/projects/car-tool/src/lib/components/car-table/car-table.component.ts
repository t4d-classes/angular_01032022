import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  displayedColumns = [
    'id', 'make', 'model', 'year', 'color', 'price', 'actions',
  ];

  @Input()
  cars: Car[] | null = [];

  allCars() {
    return this.cars ?? [];
  }

  private _editCarId = -1;

  @Input()
  set editCarId(carId: number | null) {

    if (!carId) {
      this._editCarId = -1;
      return;
    }

    this._editCarId = carId;

    if (this._editCarId > 0) {
      const car = this.allCars().find(c => c.id === this._editCarId);
      if (car) {
        this.editCarForm = this.fb.group({
          make: car.make,
          model: car.model,
          year: car.year,
          color: car.color,
          price: car.price,
        });
      }
    }
  }

  get editCarId() {
    return this._editCarId;
  }  

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  editCarForm!: FormGroup;

  doSaveCar() {
    this.saveCar.emit({
      ...this.editCarForm.value,
      id: this._editCarId,
    });
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

}
