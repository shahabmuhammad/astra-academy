import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../common/user';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
})
export class AllStudentsComponent implements OnInit {
  students!: User[];
  studentsSubscription!: Subscription;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.studentsSubscription = this.auth
      .getUserByRole('student')
      .subscribe((data: any) => {
        if (data) {
          this.students = data;
        }
      });
  }
}
