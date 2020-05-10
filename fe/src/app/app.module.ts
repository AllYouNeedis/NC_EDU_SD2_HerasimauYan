import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {StatisticComponent} from './modules/pages/components/statistic/statistic.component';
import {PollPassingPageComponent} from './modules/pages/components/poll-passing-page/poll-passing-page.component';
import {APIInterceptor} from './interceptors/api-interceptor';
import {CanActivateLoginPagesService} from './services/security/can-activate-login-pages.service';
import {CanActivateNotLoginPages} from './services/security/can-activate-not-login-pages.service';
import {CanActivateAdminPagesService} from './services/security/can-activate-admin-pages.service';

const appRoutes: Routes = [
  {path: '', component: UserAuthComponent},
  {path: 'home', component: HomeComponent, canActivate: [CanActivateLoginPagesService]},
  {path: 'reg', component: UserRegComponent, canActivate: [CanActivateNotLoginPages]},
  {path: 'auth', component: UserAuthComponent, canActivate: [CanActivateNotLoginPages]},
  {path: 'poll-constructor/:id', component: PollConstructorComponent, canActivate: [CanActivateLoginPagesService]},
  {path: 'topic-constructor', component: SharedTopicConstructorComponent, canActivate: [CanActivateAdminPagesService]},
  {path: 'poll/:id', component: PollPassingPageComponent},
  {path: 'statistic/:id', component: StatisticComponent, canActivate: [CanActivateLoginPagesService]},
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
  providers: [APIInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
  }],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
