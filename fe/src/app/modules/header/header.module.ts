import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header.component';
import {MatButtonModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
