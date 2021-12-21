import { AdminTeacherComponent } from './../admin-teacher/admin-teacher.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './../add-teacher/add-teacher.component';
import { AddStudentComponent } from './../add-student/add-student.component';
import { AdminStudentComponent } from './../admin-student/admin-student.component';
import { AdminGuardService } from './../admin-guard.service';
import { AuthGuardService } from '../auth-guard.service';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'teachers',
    component: AdminTeacherComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'students',
    component: AdminStudentComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'add-teacher/:id',
    component: AddTeacherComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'add-student/:id',
    component: AddStudentComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuardService, AdminGuardService],
  exports: [],
})
export class AdminRoutingModule {}
