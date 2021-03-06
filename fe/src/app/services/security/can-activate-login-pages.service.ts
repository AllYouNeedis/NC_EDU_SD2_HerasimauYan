import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginPagesService implements CanActivate {
  constructor(public auth: AuthService,
              private router: Router) {

  }

  public canActivate(): boolean {
    if (this.auth.isAuthenticatedAsUser()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

}
