import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
})
export class AddTeacherComponent implements OnInit, OnDestroy {
  addTeacherForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    secondName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  // subscription
  userSubscription!: Subscription;
  deleteSubscription!: Subscription;
  upateSubscription!: Subscription;

  //user-id
  id!: string | null;
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.userSubscription = this.auth.get(this.id).subscribe((data: any) => {
        if (data) {
          this.addTeacherForm.patchValue({
            firstName: data.firstName,
            secondName: data.secondName,
            email: data.email,
            password: data.password,
            phoneNumber: data.phoneNumber,
            address: data.address,
          });
        }
      });
    }
  }

  register() {
    if (this.addTeacherForm) {
      let user = this.user;
      this.userSubscription = this.auth.register(user).subscribe((data) => {
        this.router.navigate(['/admin/teachers']);
        console.log(data);
      });
    }
  }
  update() {
    this.upateSubscription = this.auth
      .update(this.id as string, this.user)
      .subscribe((data) => {
        this.router.navigate(['/admin/teachers']);
      });
  }
  delete() {
    this.deleteSubscription = this.auth
      .delete(this.id as string)
      .subscribe((data) => {
        this.router.navigate(['/admin/teachers']);
      });
  }

  //
  get firstName() {
    return this.addTeacherForm.get('firstName');
  }
  get secondName() {
    return this.addTeacherForm.get('secondName');
  }
  get email() {
    return this.addTeacherForm.get('email');
  }
  get password() {
    return this.addTeacherForm.get('password');
  }
  get confirmPassword() {
    return this.addTeacherForm.get('confirmPassword');
  }
  get phoneNumber() {
    return this.addTeacherForm.get('phoneNumber');
  }
  get address() {
    return this.addTeacherForm.get('address');
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
    this.upateSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
  }

  private get user() {
    return {
      firstName: this.addTeacherForm.value.firstName,
      secondName: this.addTeacherForm.value.secondName,
      email: this.addTeacherForm.value.email,
      password: this.addTeacherForm.value.password,
      phoneNumber: this.addTeacherForm.value.phoneNumber,
      address: this.addTeacherForm.value.address,
      role: 'teacher',
    };
  }
}
