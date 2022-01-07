import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { setErrorMessage } from 'shared';
import { CalcToolState } from '../../calc-tool.state';
import { selectHistory, selectResult } from '../../calc-tool.selectors';

import {
  add, subtract, multiply, divide, clear,
  deleteHistoryEntry,
} from '../../calc-tool.actions';

@Component({
  selector: 'app-calc-home',
  templateUrl: './calc-home.component.html',
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {

  result$ = this.store.pipe(select(selectResult));
  history$ = this.store.pipe(select(selectHistory));

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

  doMultiply() {
    this.store.dispatch(multiply({ value: this.numInput.value }));
  }

  doDivide() {
    if (this.numInput.value === 0) {
      this.store.dispatch(setErrorMessage({ message: "Division by Zero" }));
      return;
    }

    this.store.dispatch(divide({ value: this.numInput.value }));
  }
  
  doClear() {
    this.store.dispatch(clear());
  }  

  doDeleteHistoryEntry(entryId: number) {
    this.store.dispatch(deleteHistoryEntry({ historyEntryId: entryId }));
  }

}
