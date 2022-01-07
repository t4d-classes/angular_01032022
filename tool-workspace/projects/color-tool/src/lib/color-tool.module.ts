import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ColorToolRoutingModule } from './color-tool-routing.module';

import { ColorFormComponent } from './components/color-form/color-form.component';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { colorsReducer } from './color-tool.reducers';
import { ColorToolEffects } from './color-tool.effects';


@NgModule({
  declarations: [
    ColorFormComponent, ColorHomeComponent, ColorListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorToolRoutingModule,
    StoreModule.forFeature('colorTool', {
      colors: colorsReducer,
    }),
    EffectsModule.forFeature([ ColorToolEffects ]),
  ],
})
export class ColorToolModule { }
