import {Component} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: [ './user-reg.component.css' ]
})

export class UserRegComponent {
  defaultRole = 1;
  constructor(private userService: UserService) {}

  add(login: string, password: string, email: string, surname: string, name: string, patronymic: string, birthday: string): void {
    this.userService.addUser(new User(login, password, email, surname, name, patronymic, birthday, this.defaultRole));
  }
}
