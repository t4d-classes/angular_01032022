import { NgModule } from '@angular/core';

import { ColorToolRoutingModule } from './color-tool-routing.module';

import { ColorToolComponent } from './color-tool.component';



@NgModule({
  declarations: [
    ColorToolComponent
  ],
  imports: [
    ColorToolRoutingModule,
  ],
  exports: [
    ColorToolComponent
  ]
})
export class ColorToolModule { }
