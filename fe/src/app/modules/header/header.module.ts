import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
