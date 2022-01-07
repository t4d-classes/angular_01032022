import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInGuardService } from '@t4d-wnow-fullstack-angular11/user-lib';
import { AllowedRolesGuardService } from '@t4d-wnow-fullstack-angular11/user-lib';

import { EmployeesComponent } from './pages/employees/employees.component';

import { EmployeesResolverService } from '@t4d-wnow-fullstack-angular11/employee-lib';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    canActivate: [LoggedInGuardService, AllowedRolesGuardService],
    resolve: {
      employees: EmployeesResolverService,
    },
    data: {
      roles: ['admin'],
      title: 'Employees Page',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeToolRoutingModule { }
