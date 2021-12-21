import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../common/user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logo = 'ASTRA ACADEMY';
  isCollapsed = true;
  currentUser!: User | null;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      this.currentUser = user;
    });
    this.currentUser = JSON.parse(localStorage.getItem('user') as string);
  }

  logout() {
    localStorage.removeItem('user');
    this.auth.setUser(undefined);
    this.currentUser = null;
    this.router.navigate(['/']);
  }
}
