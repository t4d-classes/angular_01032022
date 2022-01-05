import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorToolComponent } from './color-tool.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: ColorToolComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorToolRoutingModule { }
