// students.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpDataService } from 'src/app/services/http-data.service';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent  {


  @ViewChild('studentForm', { static: false })
  studentForm: NgForm;

  studentData: Student;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  isEditMode = false;

  constructor(private httpDataService: HttpDataService) {
    this.studentData = {} as Student;
  }

 
}