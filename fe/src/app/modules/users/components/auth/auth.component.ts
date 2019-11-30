import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
     login: new FormControl(),
     password: new FormControl()
    });
  }

  logIn() {
    console.log(this.form);
    this.userService.logIn(this.form.value.login, this.form.value.password)
      .subscribe((response: any) => {
          console.log(response);
          localStorage.setItem('user_id', response.id);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
        });;
  }
}
