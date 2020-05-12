import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {SnackBarService} from '../snack-bar/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminPagesService implements CanActivate {
  constructor(public auth: AuthService,
              private router: Router,
              private snack: SnackBarService) {

  }

  public canActivate(): boolean {
    if (this.auth.isAuthenticatedAsAdmin()) {
      return true;
    }
    this.snack.openSnackBar('К сожалению эта функция доступна только для администраторов((');
    this.router.navigate(['/']);
    return false;
  }

}
