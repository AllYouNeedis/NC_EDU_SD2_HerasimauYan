import {Injectable} from '@angular/core';
import {User} from '../../modules/users/models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly TOKEN_KEY: string = 'token';
  private readonly CURRENT_USER: string = 'user';

  private currentUser: User;

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public setCurrentUser(currentUser: User): void {
    this.currentUser = currentUser;
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(currentUser));
  }

  public getCurrentUser(): User {
    return this.currentUser || JSON.parse(localStorage.getItem(this.CURRENT_USER));
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public isTokenExists(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token != null && this.currentUser != null;
  }

  public clearToken(): void {
    localStorage.setItem(this.TOKEN_KEY, null);
  }

  public clearUser(): void {
    this.currentUser = null;
    localStorage.setItem(this.CURRENT_USER, null);
  }
}
