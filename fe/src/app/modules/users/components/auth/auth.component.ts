import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  authorized;
  form: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
     login: new FormControl(),
     password: new FormControl()
    });
  }

  logIn() {
    console.log(this.form);
    this.authorized = this.userService.logIn(this.form.value.login, this.form.value.password);
  }
}
