import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {QuestionComponent} from './components/question.component';

@NgModule({
  declarations: [
    QuestionComponent
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
    MatIconModule
  ],
  providers: [],
  exports: [QuestionComponent]
})

export class QuestionsModule {
}
