import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTeacherComponent } from '../admin-teacher/admin-teacher.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminStudentComponent } from '../admin-student/admin-student.component';
import { AdminTableComponent } from '../admin-table/admin-table.component';

@NgModule({
  declarations: [
    AddTeacherComponent,
    AddStudentComponent,
    AdminTeacherComponent,
    AdminStudentComponent,
    AdminTableComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  exports: [AddTeacherComponent, AddStudentComponent],
})
export class AdminModule {}
