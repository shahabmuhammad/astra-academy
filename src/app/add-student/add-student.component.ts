import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit, OnDestroy {
  addStudentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    assignTeacher: new FormControl('', Validators.required),
  });

  // subscription
  userSubscription!: Subscription;
  deleteSubscription!: Subscription;
  upateSubscription!: Subscription;

  // teachers
  teachers$: any;

  //user-id
  id!: string | null;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teachers$ = this.auth.getUserByRole('teacher');
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.userSubscription = this.auth.get(this.id).subscribe((data: any) => {
        if (data) {
          this.addStudentForm.patchValue({
            firstName: data.firstName,
            secondName: data.secondName,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
            address: data.address,
            assignTeacher: data.assignTeacher,
          });
        }
      });
    }
  }

  register() {
    if (this.addStudentForm) {
      let user = this.user;
      this.userSubscription = this.auth.register(user).subscribe((data) => {
        this.router.navigate(['/admin/students']);
        console.log(data);
      });
    }
  }
  update() {
    this.upateSubscription = this.auth
      .update(this.id as string, this.user)
      .subscribe((data) => {
        this.router.navigate(['/admin/students']);
      });
  }
  delete() {
    this.deleteSubscription = this.auth
      .delete(this.id as string)
      .subscribe((data) => {
        this.router.navigate(['/admin/students']);
      });
  }

  //
  get firstName() {
    return this.addStudentForm.get('firstName');
  }
  get secondName() {
    return this.addStudentForm.get('secondName');
  }
  get email() {
    return this.addStudentForm.get('email');
  }
  get password() {
    return this.addStudentForm.get('password');
  }
  get confirmPassword() {
    return this.addStudentForm.get('confirmPassword');
  }
  get phoneNumber() {
    return this.addStudentForm.get('phoneNumber');
  }
  get address() {
    return this.addStudentForm.get('address');
  }
  get assignTeacher() {
    return this.addStudentForm.get('assignTeacher');
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
    this.upateSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
  }

  private get user() {
    return {
      firstName: this.addStudentForm.value.firstName,
      secondName: this.addStudentForm.value.secondName,
      email: this.addStudentForm.value.email,
      password: this.addStudentForm.value.password,
      phoneNumber: this.addStudentForm.value.phoneNumber,
      address: this.addStudentForm.value.address,
      assignTeacher: this.addStudentForm.value.assignTeacher,
      role: 'student',
    };
  }
}
