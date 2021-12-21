import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { url } from './common/url';
import { User } from './common/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = url;
  public user = new Subject<User>();
  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }) {
    return this.http.post(this.url + 'users', user);
  }

  getAll() {
    return this.http.get(this.url + 'users');
  }
  get(id: string) {
    return this.http.get(this.url + `users/${id}`);
  }

  register(user: User) {
    return this.http.post(this.url + 'users', user);
  }
  update(id: string, user: User) {
    return this.http.put(this.url + `users/${id}`, user);
  }
  delete(id: string) {
    return this.http.delete(this.url + `users/${id}`);
  }

  setUser(user: User | undefined) {
    this.user.next(user);
  }
  getUserByRole(role: string) {
    return this.http.get(this.url + `users?role=${role}`);
  }
  getStudentsByTeacherId(teacher: string) {
    return this.http.get(this.url + `users?assignTeacher=${teacher}`);
  }
}
