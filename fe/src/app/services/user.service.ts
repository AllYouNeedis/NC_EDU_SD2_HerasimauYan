import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {User} from '../modules/users/models/user';
import {Observable} from 'rxjs';
import {StorageService} from './storage/storage.service';

@Injectable({providedIn: 'root'})
export class UserService {

  private usersUrl = '/api/users';
  private tokenUrl = '/api/token';

  constructor(private http: HttpClient,
              private storage: StorageService) {
  }

  addUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl + '/signup', user);
  }

  generateToken(login: string, password: string): Observable<any> {
    const params = {
        login,
        password
    };
    return this.http.post(this.tokenUrl + '/generate-token' , params);
  }

  getCurrentUser() {
    return this.http.get(this.usersUrl + '/current');
  }

  logOut() {
    this.storage.clearToken();
    this.storage.clearUser();
  }
}
