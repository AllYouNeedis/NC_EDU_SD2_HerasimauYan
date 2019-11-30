import {NgModule} from '@angular/core';
import {NotFoundComponent} from './components/404/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../header/header.module';
import {FormsModule} from '@angular/forms';
import {UserRegComponent} from './components/user-reg/user-reg.component';
import {UsersModule} from '../users/users.module';
import {PollConstructorComponent} from './components/poll-constructor/poll-constructor.component';
import {PollModule} from '../poll/poll.module';
import {QuestionsModule} from '../question/questions.module';
import {UserAuthComponent} from './components/user-auth/user-auth.component';
import {SharedTopicConstructorComponent} from './components/shared-topic-constructor/shared-topic-constructor.component';
import {TopicModule} from '../topic/topic.module';
import {BrowserModule} from '@angular/platform-browser';
import {StatisticComponent} from './components/statistic/statistic.component';
import {StatisticModule} from '../statistic/statistic.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    UserRegComponent,
    HomeComponent,
    PollConstructorComponent,
    UserAuthComponent,
    SharedTopicConstructorComponent,
    StatisticComponent
  ],
  imports: [
    HeaderModule,
    UsersModule,
    RouterModule,
    FormsModule,
    PollModule,
    QuestionsModule,
    TopicModule,
    BrowserModule,
    StatisticModule
  ],
  providers: [],
  exports: [
    NotFoundComponent,
    UserRegComponent,
    HomeComponent,
    PollConstructorComponent,
    UserAuthComponent,
    SharedTopicConstructorComponent,
    StatisticComponent
  ]
})

export class PagesModule {
}
