import { Component } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { IMyEmployee, MockData } from './mock-data';

@Component({
  selector: 'pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent {
  employeesList: Array<IMyEmployee> = [];
  employeesPicked: Array<IMyEmployee> = [];

  constructor( private modalService: NgbModal) {
    this.employeesList = MockData.getEmployees();
  }

  open(content) {
    this.modalService.open(content, { size: 'sm'}).result.then((result) => {
      
    })
  }
  resetLists() {
    this.employeesList = MockData.getEmployees();
    this.employeesPicked = [];
  }

  addEmployeeToPicked(empId) {
    const employee = this.employeesList.filter(emp => emp.id === empId)[0];
    this.employeesPicked.push(employee);
    this.employeesList = this.employeesList.filter(emp => emp.id !== empId);
  }

  removeEmployeeFromPicked(empId) {
    const employee = this.employeesPicked.filter(emp => emp.id === empId)[0];
    this.employeesList.push(employee);
    this.employeesPicked = this.employeesPicked.filter(emp => emp.id !== empId);
  }
}