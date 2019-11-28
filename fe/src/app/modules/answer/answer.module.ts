import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AnswerComponent} from './components/answer.component';

@NgModule({
  declarations: [
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TextFieldModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [],
  exports: [AnswerComponent]
})

export class AnswerModule {
}
