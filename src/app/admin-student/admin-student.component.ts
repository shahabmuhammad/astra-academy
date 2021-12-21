import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css'],
})
export class AdminStudentComponent implements OnInit {
  students$: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.students$ = this.auth.getUserByRole('student');
  }
}
