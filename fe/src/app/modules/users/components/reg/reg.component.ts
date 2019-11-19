import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: [ './reg.component.css' ]
})

export class RegComponent {
  defaultRole = 'USER';
  constructor(private userService: UserService) {}

  regUser(form: NgForm) {
    this.userService.addUser(this.getUserFromForm(form));
  }
  getDate(form: NgForm): string {
    return form.value.dp.year + '-' + form.value.dp.month + '-' + form.value.dp.day;
  }
  getUserFromForm(form: NgForm): User {
    const login = form.value.login;
    const pas = form.value.password;
    const email = form.value.email;
    const name = form.value.name;
    const surname = form.value.surname;
    const patronymic = form.value.patronymic;
    const birthday = this.getDate(form);
    return new User(login, pas, email, surname, name, patronymic, birthday, this.defaultRole);
  }
}
