import {NgModule} from '@angular/core';
import {NotFoundComponent} from './components/404/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../header/header.module';
import {FormsModule} from '@angular/forms';
import {UserRegComponent} from './components/user-reg/user-reg.component';
import {UsersModule} from '../users/users.module';
import {PollConstructorComponent} from './components/poll-constructor/poll-constructor.component';
import {PollModule} from '../polls/poll.module';
import {QuestionsModule} from '../questions/questions.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    UserRegComponent,
    HomeComponent,
    PollConstructorComponent
  ],
  imports: [
    HeaderModule,
    UsersModule,
    RouterModule,
    FormsModule,
    PollModule,
    QuestionsModule
  ],
  providers: [],
  exports: [NotFoundComponent, UserRegComponent, HomeComponent, PollConstructorComponent]
})

export class PagesModule {
}
