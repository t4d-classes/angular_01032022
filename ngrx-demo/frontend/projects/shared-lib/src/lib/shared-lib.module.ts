import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { errorMessageReducer } from './reducers/errorMessage.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('shared', { errorMessage: errorMessageReducer }),
  ],
  exports: []
})
export class SharedLibModule { }
