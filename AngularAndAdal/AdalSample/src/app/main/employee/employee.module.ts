import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutes } from './employee.routing';
import { EmployeeService } from './employee.service';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutes
  ],
  declarations: [
    ListComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
