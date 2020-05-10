import {Injectable} from '@angular/core';
import {StorageService} from './storage/storage.service';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private storageService: StorageService) {
  }

  public isAuthenticatedAsUser(): boolean {
    const token = this.storageService.getToken();
    return token && token !== 'null' && !!this.storageService.getCurrentUser();
  }

  public isAuthenticatedAsAdmin(): boolean {
    return this.storageService.isTokenExists() && this.storageService.getCurrentUser().userRole === 'ADMIN';
  }

}
