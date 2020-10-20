import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { TeacherDetailsComponent } from './components/teacher-details/teacher-details.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsListComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'add', component: AddStudentComponent },
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'teachers', component: TeachersListComponent },
  { path: 'teachers/:id', component: TeacherDetailsComponent },
  { path: 'addteacher', component: AddTeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
