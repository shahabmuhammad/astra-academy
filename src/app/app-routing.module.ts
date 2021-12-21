import { NotFoundComponent } from './not-found/not-found.component';
import { AdminTeacherComponent } from './admin-teacher/admin-teacher.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { TeacherStudentsComponent } from './teacher-students/teacher-students.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminGuardService } from './admin-guard.service';
import { StudentGuardService } from './student-guard.service';
import { TeacherGuardService } from './teacher-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [],
  },
  {
    path: 'admin/teachers',
    component: AdminTeacherComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'admin/students',
    component: AdminStudentComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'admin/add-teacher/:id',
    component: AddTeacherComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'admin/add-teacher',
    component: AddTeacherComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'admin/add-student/:id',
    component: AddStudentComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'admin/add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuardService, AdminGuardService],
  },
  {
    path: 'students/all',
    component: AllStudentsComponent,
    canActivate: [AuthGuardService, StudentGuardService],
  },
  {
    path: 'teacher/students',
    component: TeacherStudentsComponent,
    canActivate: [AuthGuardService, TeacherGuardService],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService, AdminGuardService],
  exports: [RouterModule],
})
export class AppRoutingModule {}
