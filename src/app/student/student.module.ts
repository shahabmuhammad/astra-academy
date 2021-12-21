import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStudentsComponent } from '../all-students/all-students.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllStudentsComponent],
  imports: [CommonModule, SharedModule],
})
export class StudentModule {}
