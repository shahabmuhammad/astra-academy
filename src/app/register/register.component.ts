import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../common/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      secondName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    },
    {
      validators: [PasswordValidator.passwordShouldMatch],
    }
  );

  // subscription
  userSubscription!: Subscription;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    if (this.registerForm) {
      let user = {
        firstName: this.registerForm.value.firstName,
        secondName: this.registerForm.value.secondName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phoneNumber: this.registerForm.value.phoneNumber,
        address: this.registerForm.value.address,
        role: 'admin',
      };

      this.userSubscription = this.auth.register(user).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/login']);
      });
    }
  }

  //
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get secondName() {
    return this.registerForm.get('secondName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get address() {
    return this.registerForm.get('address');
  }
  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
