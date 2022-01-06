import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { CalcToolState } from '../../calc-tool.state';

import { add, subtract } from '../../calc-tool.actions';

@Component({
  selector: 'app-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  result$ = this.store.pipe(select('result'));

  numInput = new FormControl(0);

  constructor(private store: Store<CalcToolState>) { }

  ngOnInit(): void {
  }

  doAdd() {
    this.store.dispatch(add({ value: this.numInput.value }));
  }

  doSubtract() {
    this.store.dispatch(subtract({ value: this.numInput.value }));
    
  }

}
