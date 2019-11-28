import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatRadioButton,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TopicConstructorComponent} from './components/topic-constructor/topic-constructor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {QuestionsModule} from '../question/questions.module';
import {TopicMenuComponent} from './components/topic-menu/topic-menu.component';
import {TopicQuestionComponent} from './components/topic-question/topic-question.component';
import {TopicPassingComponent} from './components/topic-passing/topic-passing.component';
import {AnswerModule} from '../answer/answer.module';

@NgModule({
  declarations: [
    TopicConstructorComponent,
    TopicMenuComponent,
    TopicQuestionComponent,
    TopicPassingComponent
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
    DragDropModule,
    QuestionsModule,
    AnswerModule,
  ],
  providers: [],
  exports: [
    TopicConstructorComponent,
    TopicMenuComponent,
    TopicQuestionComponent,
    TopicPassingComponent
  ]
})

export class TopicModule {
}
