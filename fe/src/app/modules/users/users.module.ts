import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RegComponent} from './components/reg/reg.component';
import {UserService} from '../../services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbDatepickerModule,
  ],
  providers: [UserService],
  exports: [RegComponent]
})

export class UsersModule {
}
