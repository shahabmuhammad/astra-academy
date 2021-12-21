import { User } from './common/user';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    let user: User = JSON.parse(localStorage.getItem('user') as string);
    console.log(user);
    if (user?.role == 'admin') {
      return true;
    } else if (this.auth.user) {
      this.auth.user.pipe(
        map((user: any) => {
          if (user?.role == 'admin') {
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
