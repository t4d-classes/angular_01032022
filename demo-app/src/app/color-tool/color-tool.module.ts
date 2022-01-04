import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

import { simpleColors } from './services/simple-colors.service';
import { ColorsService, ColorsService2 } from './services/colors.service';

@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorListComponent,
    ColorFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ 
    // ColorsService,
    // expanded version where the
    // token and implementation are separate
    // { provide: ColorsService, useClass: ColorsService2 },
    // ColorsService2,
    { provide: ColorsService, useValue: simpleColors },
  ],
  exports: [
    ColorHomeComponent,
  ],
})
export class ColorToolModule { }
