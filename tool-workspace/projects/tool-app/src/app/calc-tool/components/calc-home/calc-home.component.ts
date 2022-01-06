import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { CalcToolState } from '../../calc-tool.state';

import { add, subtract, multiply, divide, clear, setErrorMessage, clearErrorMessage } from '../../calc-tool.actions';

@Component({
  selector: 'app-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  result$ = this.store.pipe(select('result'));
  history$ = this.store.pipe(select('history'));
  errorMessage$ = this.store.pipe(select('errorMessage'));

  numInput = new FormControl(0);

  constructor(private store: Store<CalcToolState>) { }

  ngOnInit(): void {
  }

  doAdd() {
    this.store.dispatch(clearErrorMessage());
    this.store.dispatch(add({ value: this.numInput.value }));
  }

  doSubtract() {
    this.store.dispatch(clearErrorMessage());
    this.store.dispatch(subtract({ value: this.numInput.value }));
  }

  doMultiply() {
    this.store.dispatch(clearErrorMessage());
    this.store.dispatch(multiply({ value: this.numInput.value }));
  }

  doDivide() {
    
    if (this.numInput.value === 0) {
      this.store.dispatch(setErrorMessage({ message: "Divide by zero." }));
      return;
    }

    this.store.dispatch(clearErrorMessage());
    this.store.dispatch(divide({ value: this.numInput.value }));
  }
  
  doClear() {
    this.store.dispatch(clearErrorMessage());
    this.store.dispatch(clear());
  }  

}
