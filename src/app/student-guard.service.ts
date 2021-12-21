import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { User } from './common/user';

@Injectable({
  providedIn: 'root',
})
export class StudentGuardService {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    let user: User = JSON.parse(localStorage.getItem('user') as string);
    if (user?.role === 'student') {
      return true;
    } else if (this.auth.user) {
      this.auth.user.pipe(
        map((user: any) => {
          if (user?.role == 'student') {
            return true;
          }
          this.router.navigate(['/']);
          return false;
        })
      );
    }
    this.router.navigate(['/']);
    return false;
  }
}
