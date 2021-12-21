import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../common/user';

@Component({
  selector: 'app-teacher-students',
  templateUrl: './teacher-students.component.html',
  styleUrls: ['./teacher-students.component.css'],
})
export class TeacherStudentsComponent implements OnInit, OnDestroy {
  currentUser!: User | null;
  studentsSubscription!: Subscription;
  authSubscription!: Subscription;
  students!: User[];
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.auth.user.subscribe((user) => {
      this.currentUser = user;
    });
    this.currentUser = JSON.parse(localStorage.getItem('user') as string);
    console.log(this.currentUser);

    if (this.currentUser) {
      if (this.currentUser?.role == 'teacher') {
        this.studentsSubscription = this.auth
          .getStudentsByTeacherId(this.currentUser?.id as string)
          .subscribe((data: any) => {
            if (data) {
              this.students = data;
            }
          });
      }
    }
  }

  ngOnDestroy(): void {
    this.studentsSubscription?.unsubscribe();
    this.authSubscription?.unsubscribe();
  }
}
