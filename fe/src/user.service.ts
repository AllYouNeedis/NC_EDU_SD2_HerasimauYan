import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {User} from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private usersUrl = '/api/users';  // URL to web api

  constructor(private http: HttpClient) {}

  addUser(user: User) {
    this.http.post(this.usersUrl, user).subscribe((data: User) => console.log(data), error => console.log(error));
  }
}
