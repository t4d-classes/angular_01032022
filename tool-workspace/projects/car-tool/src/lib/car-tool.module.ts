import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CarToolRoutingModule } from './car-tool-routing.module';

import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { carsReducer, editCarIdReducer } from './car-tool.reducers';

@NgModule({
  declarations: [
    CarEditRowComponent,
    CarFormComponent,
    CarHomeComponent,
    CarTableComponent,
    CarViewRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CarToolRoutingModule,
    StoreModule.forFeature('carTool', {
      cars: carsReducer,
      editCarId: editCarIdReducer
    }),
    EffectsModule.forFeature([]),
  ],
})
export class CarToolModule { }
