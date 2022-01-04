import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

// import { ColorsService } from './services/colors.service';

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
  // providers: [ ColorsService ],
  exports: [
    ColorHomeComponent,
  ],
})
export class ColorToolModule { }
