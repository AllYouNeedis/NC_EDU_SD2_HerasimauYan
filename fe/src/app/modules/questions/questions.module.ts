import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {QuestionTextComponent} from './components/text/question-text.component';
import {QuestionChooseAnyComponent} from './components/choose-any/question-choose-any.component';
import {QuestionChooseOneComponent} from './components/choose-one/question-choose-one.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    QuestionTextComponent,
    QuestionChooseAnyComponent,
    QuestionChooseOneComponent
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
  exports: [QuestionTextComponent, QuestionChooseAnyComponent, QuestionChooseOneComponent]
})

export class QuestionsModule {
}
