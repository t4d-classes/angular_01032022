import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { CalcToolState } from '../../calc-tool.state';

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

  result$ = this.store.pipe(select('result'));
  history$ = this.store.pipe(select('history'));

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
    this.store.dispatch(divide({ value: this.numInput.value }));
  }
  
  doClear() {
    this.store.dispatch(clear());
  }  

  doDeleteHistoryEntry(entryId: number) {
    this.store.dispatch(deleteHistoryEntry({ historyEntryId: entryId }));
  }

}
