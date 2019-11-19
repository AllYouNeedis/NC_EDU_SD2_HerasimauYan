import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PagesModule} from './modules/pages/pages.module';
import {NotFoundComponent} from './modules/pages/components/404/not-found.component';
import {HomeComponent} from './modules/pages/components/home/home.component';
import {PollConstructorComponent} from './modules/pages/components/poll-constructor/poll-constructor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';
import {UserRegComponent} from './modules/pages/components/user-reg/user-reg.component';
import {UserAuthComponent} from './modules/pages/components/user-auth/user-auth.component';
import {SharedTopicConstructorComponent} from './modules/pages/components/shared-topic-constructor/shared-topic-constructor.component';

const appRoutes: Routes = [
  {path: '', component: UserAuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reg', component: UserRegComponent},
  {path: 'auth', component: UserAuthComponent},
  {path: 'poll-constructor', component: PollConstructorComponent},
  {path: 'topic-constructor', component: SharedTopicConstructorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
