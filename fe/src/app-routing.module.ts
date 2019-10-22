import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserRegComponent} from './user-reg/user-reg.component';

const routes: Routes = [
  { path: 'registration', component: UserRegComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
