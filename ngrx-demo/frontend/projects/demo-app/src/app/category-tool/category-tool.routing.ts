import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInGuardService } from '@t4d-wnow-fullstack-angular11/user-lib';
import { AllowedRolesGuardService } from '@t4d-wnow-fullstack-angular11/user-lib';

import { CategoriesComponent } from './pages/categories/categories.component';

import { CategoriesResolverService } from '@t4d-wnow-fullstack-angular11/category-lib';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    resolve: {
      categories: CategoriesResolverService,
    },
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    data: {
      roles: ['user'],
      title: 'Categories Page',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryToolRoutingModule { }
