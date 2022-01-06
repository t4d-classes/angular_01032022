import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CarToolRoutingModule } from './car-tool-routing.module';

import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';

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
    CarToolRoutingModule,
  ],
})
export class CarToolModule { }
