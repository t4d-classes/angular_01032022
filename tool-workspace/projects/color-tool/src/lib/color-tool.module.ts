import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ColorToolRoutingModule } from './color-tool-routing.module';

import { ColorFormComponent } from './components/color-form/color-form.component';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { colorsReducer } from './color-tool.reducers';


@NgModule({
  declarations: [
    ColorFormComponent, ColorHomeComponent, ColorListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorToolRoutingModule,
    StoreModule.forRoot({
      colors: colorsReducer,
    }),
  ],
})
export class ColorToolModule { }
