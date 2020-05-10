import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {StorageService} from '../../../../services/storage/storage.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserService,
              private storage: StorageService,
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
    this.userService.generateToken(this.form.value.login, this.form.value.password)
      .subscribe((response) => {
        console.log(response);
        console.log(response.token);
        this.storage.setToken((response as any).token);
        this.userService.getCurrentUser().subscribe((user: User) => {
          this.storage.setCurrentUser(user);
          this.router.navigate(['/home']);
        }, () => this.router.navigate(['/']));
      },
        error => {
          console.log(error);
        });
  }
}
