import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carForm!: FormGroup;

  @Input()
  buttonText = "Submit Car";

  @Output()
  submitCar = new EventEmitter<NewCar>();

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

  doSubmitCar() {
    this.submitCar.emit(this.carForm.value);
  }


}
