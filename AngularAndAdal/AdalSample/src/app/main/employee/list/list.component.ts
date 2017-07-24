import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeList: Array<IEmployee> = [];

  constructor(
    private empSvc: EmployeeService
  ) { }

  ngOnInit() {
    this.empSvc.getEmployees()
        .subscribe(
          rslt => this.employeeList = rslt,
          error => console.log(error)
        );
  }
}
