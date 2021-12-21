import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    let user = localStorage.getItem('user');
    if (user) {
      return true;
    } else if (this.auth.user) {
      this.auth.user.pipe(
        map((user: any) => {
          if (user) {
            return true;
          }
          this.router.navigate(['/login']);
          return false;
        })
      );
    }
    this.router.navigate(['/login']);
    return false;
  }
}
