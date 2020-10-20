import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  currentStudent = null;
  message = '';

  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getStudent(this.route.snapshot.paramMap.get('id'));
  }

  getStudent(id): void {
    this.studentService.get(id)
      .subscribe(
        data => {
          this.currentStudent = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAsistio(status): void {
    const data = {
      nombre: this.currentStudent.nombre,
      apellido: this.currentStudent.apellido,
      asistio: status
    };

    this.studentService.update(this.currentStudent.id, data)
      .subscribe(
        response => {
          this.currentStudent.asistio = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateStudent(): void {
    this.studentService.update(this.currentStudent.id, this.currentStudent)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El estudiante fue actualizado con éxito!';
        },
        error => {
          console.log(error);
        });
  }

  deleteStudent(): void {
    this.studentService.delete(this.currentStudent.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/students']);
        },
        error => {
          console.log(error);
        });
  }

}
