import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {User} from '../modules/users/models/user';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {

  private usersUrl = '/api/users';  // URL to web api

  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl, user);
  }

  logIn(login: string, password: string): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        login,
        password
      }
    });
    return this.http.get(this.usersUrl + '/auth', {params});
  }

  logOut() {
    localStorage.removeItem('user_id');
  }
}
