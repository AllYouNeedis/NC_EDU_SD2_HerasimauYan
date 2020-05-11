import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class CanActivateNotLoginPages implements CanActivate {

  constructor(public auth: AuthService,
              private router: Router) {

  }

  public canActivate(): boolean {
    if (!this.auth.isAuthenticatedAsUser() && !this.auth.isAuthenticatedAsAdmin()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

}
