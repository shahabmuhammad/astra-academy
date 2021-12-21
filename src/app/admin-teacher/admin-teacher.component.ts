import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css'],
})
export class AdminTeacherComponent implements OnInit {
  teachers$: any;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.teachers$ = this.auth.getUserByRole('teacher');
    this.auth.getUserByRole('teacher').subscribe((data) => {
      console.log(data);
    });
  }
}
