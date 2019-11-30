import {Component} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService,
              private router: Router) {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/auth']);
  }
}
