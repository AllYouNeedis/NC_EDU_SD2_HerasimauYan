import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: [ './reg.component.css' ]
})

export class RegComponent implements OnInit {
  defaultRole = 'USER';
  form: FormGroup;
  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      surname: new FormControl(),
      name: new FormControl(),
      patronymic: new FormControl(),
      birthday: new FormControl()
    });
  }

  parseDate(dateStruct): string {
    return dateStruct.year + '-' + dateStruct.month + '-' + dateStruct.day;
  }

  regUser() {
    const inp = this.form.value;
    const birthday = this.parseDate(inp.birthday);
    const user = new User(inp.login, inp.password, inp.email, inp.surname, inp.name, inp.patronymic, birthday, this.defaultRole);
    this.userService.addUser(user)
      .subscribe((data: User) => {
        console.log(data);
        this.router.navigate(['/auth']);
      }, error => console.log(error));
  }
}
