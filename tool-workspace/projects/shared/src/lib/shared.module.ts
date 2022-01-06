import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolFooterComponent } from './components/tool-footer/tool-footer.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';


@NgModule({
  declarations: [
    ToolHeaderComponent, ToolFooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToolHeaderComponent, ToolFooterComponent,
  ]
})
export class SharedModule { }
