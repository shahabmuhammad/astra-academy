import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../common/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  currentUser: User = {
    id: '',
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  };
  authSubscription!: Subscription;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm) {
      this.authSubscription = this.auth.getAll().subscribe((data: any) => {
        if (data) {
          let user = data.find((x: any) => {
            if (
              x.email === this.loginForm.value.email &&
              x.password === this.loginForm.value.password
            ) {
              return x;
            }
          });
          if (user) {
            console.log(user);
            this.currentUser.firstName = user?.firstName;
            this.currentUser.secondName = user?.secondName;
            this.currentUser.email = user?.email;
            this.currentUser.role = user?.role;
            this.currentUser.address = user?.address;
            this.currentUser.phoneNumber = user?.phoneNumber;
            this.currentUser.id = user?.id;
            localStorage.setItem('user', JSON.stringify(this.currentUser));
            this.auth.setUser(this.currentUser);
            this.router.navigate(['/']);
          } else {
            this.loginForm.setErrors({ invalidLogin: true });
          }
        } else {
          this.loginForm.setErrors({ invalidLogin: true });
        }
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
