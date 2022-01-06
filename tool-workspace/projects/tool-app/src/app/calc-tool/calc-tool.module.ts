import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CalcToolRoutingModule } from './calc-tool-routing.module';
import { CalcHomeComponent } from './components/calc-home/calc-home.component';
import { resultReducer, historyReducer, errorMessageReducer } from './calc-tool.reducers';



@NgModule({
  declarations: [
    CalcHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      result: resultReducer,
      history: historyReducer,
      errorMessage: errorMessageReducer,
    }),
    CalcToolRoutingModule,
  ]
})
export class CalcToolModule { }
