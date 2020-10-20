import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  teachers: any;
  currentTeacher = null;
  currentIndex = -1;
  nombre: '';

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.retrieveTeachers();
  }
  retrieveTeachers(): void {
    this.teacherService.getAll()
    .subscribe(
      data => {
        this.teachers = data;
        console.log(data);
      }, 
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void{
    this.retrieveTeachers();
    this.currentTeacher = null;
    this.currentIndex = -1;
  }

  setActiveTeacher(teacher, index): void {
    this.currentTeacher = teacher;
    this.currentIndex = index;
  }

  removeAllTeachers(): void{
    this.teacherService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveTeachers();
      },
      error => {
        console.log(error);        
      }
    );
  }

  searchNombre(): void {
    this.teacherService.findByNombre(this.nombre)
    .subscribe(
      data => {
        this.teachers = data;
        console.log(data);        
      },
      error => {
        console.log(error);        
      }
    );
  }
}
