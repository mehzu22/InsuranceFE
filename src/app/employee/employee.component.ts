import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empData:any

  constructor(private empService:EmployeeService,private dialog: MatDialog){
    this.empService.getAllemployee().subscribe((data)=>{
      this.empData=data
      console.log(this.empData)
    })
  }

  openAddEmpDialog(){
    this.dialog.open(AddEmployeeComponent)
  }
  openUpdateEmpDialog(){
    this.dialog.open(UpdateEmployeeComponent)
  }
  openDeleteEmpDialog(){
    this.dialog.open(DeleteEmployeeComponent)
  }
}
