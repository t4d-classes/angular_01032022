import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "color-tool",
    loadChildren: () => import("color-tool").then(m => m.ColorToolModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
