import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  currentTeacher = null;
  message = '';

  constructor(private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTeacher(this.route.snapshot.paramMap.get('id'));
  }

  getTeacher(id): void {
    this.teacherService.get(id)
      .subscribe(
        data => {
          this.currentTeacher = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateActivo(status): void {
    const data = {
      nombre: this.currentTeacher.nombre,
      apellido: this.currentTeacher.apellido,
      activo: status
    };

    this.teacherService.update(this.currentTeacher.id, data)
      .subscribe(
        response => {
          this.currentTeacher.activo = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTeacher(): void {
    this.teacherService.update(this.currentTeacher.id, this.currentTeacher)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El profesor fue actualizado con éxito!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTeacher(): void {
    this.teacherService.delete(this.currentTeacher.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/teachers']);
        },
        error => {
          console.log(error);
        });
  }

}
