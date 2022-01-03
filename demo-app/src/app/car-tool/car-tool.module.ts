import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CarHomeComponent } from './components/car-home/car-home.component';



@NgModule({
  declarations: [
    CarHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CarHomeComponent,
  ]
})
export class CarToolModule { }
