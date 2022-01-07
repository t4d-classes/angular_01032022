import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CategoryLibModule } from '@t4d-wnow-fullstack-angular11/category-lib';

import { CategoryToolRoutingModule } from './category-tool.routing';
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    CategoryLibModule,
    CategoryToolRoutingModule,
  ],
})
export class CategoryToolModule { }
