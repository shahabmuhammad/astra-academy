import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherStudentsComponent } from '../teacher-students/teacher-students.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TeacherStudentsComponent],
  imports: [CommonModule, SharedModule],
})
export class TeacherModule {}
