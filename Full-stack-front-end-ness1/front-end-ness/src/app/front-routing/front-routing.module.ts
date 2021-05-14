import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateEmployeeComponent} from '../create-employee/create-employee.component';
import {EmployeeListComponent} from '../employee-list/employee-list.component'
import {UpdateEmployeeComponent} from '../update-employee/update-employee.component'
import {EmployeeDetailsComponent} from '../employee-details/employee-details.component'

const routes: Routes = [
{path:'employees',component:EmployeeListComponent},
{ path:'create-employee',component:CreateEmployeeComponent},
{path:'',redirectTo:'employees',pathMatch: 'full'},
{path:'update-employee/:id',component:UpdateEmployeeComponent},
{path:'employee-details/:id',component:EmployeeDetailsComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
