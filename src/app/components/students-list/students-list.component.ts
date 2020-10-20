import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service'

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: any;
  currentStudent = null;
  currentIndex = -1;
  nombre: '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.retrieveStudents();
  }

  retrieveStudents(): void {
    this.studentService.getAll()
    .subscribe(
      data => {
        this.students = data;
        console.log(data);
      }, 
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void{
    this.retrieveStudents();
    this.currentStudent = null;
    this.currentIndex = -1;
  }

  setActiveStudent(student, index): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

  removeAllStudents(): void{
    this.studentService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveStudents();
      },
      error => {
        console.log(error);        
      }
    );
  }

  searchNombre(): void {
    this.studentService.findByNombre(this.nombre)
    .subscribe(
      data => {
        this.students = data;
        console.log(data);        
      },
      error => {
        console.log(error);        
      }
    );
  }

  

}
