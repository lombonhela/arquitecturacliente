import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacher = {
    nombre: '',
    apellido: '',
    activo: false
  };
  submitted = false;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  saveTeacher(): void {
    const data = {
      nombre: this.teacher.nombre,
      apellido: this.teacher.apellido
    };

    this.teacherService.create(data)
      .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          }, 
          error => {
            console.log(error);
          }
      );
  }

  newTeacher(): void {
    this.submitted = false;
    this.teacher = {
      nombre: '',
      apellido: '',
      activo: false
    };
  }

}
