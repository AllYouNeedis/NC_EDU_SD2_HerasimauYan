import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {User} from '../modules/users/models/user';

@Injectable({providedIn: 'root'})
export class UserService {

  private usersUrl = '/api/users';  // URL to web api

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    this.http.post(this.usersUrl, user).subscribe((data: User) => console.log(data), error => console.log(error));
  }

  logIn(login: string, password: string) {
    const params = new HttpParams({
      fromObject: {
        login,
        password
      }
    });
    this.http.get(this.usersUrl + '/auth', {params})
      .subscribe((response: any) => {
          console.log(response);
          localStorage.setItem('user_id', response.id);
        },
        error => {
          console.log(error);
        });
  }

  logOut() {
    localStorage.removeItem('user_id');
  }
}
