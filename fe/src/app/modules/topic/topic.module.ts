import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TopicComponent} from './components/topic.component';
import {TopicConstructorComponent} from './components/topic-constructor/topic-constructor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {QuestionsModule} from '../question/questions.module';
import {TopicMenuComponent} from './components/topic-menu/topic-menu.component';
import {TopicQuestionComponent} from './components/topic-question/topic-question.component';

@NgModule({
  declarations: [
    TopicComponent,
    TopicConstructorComponent,
    TopicMenuComponent,
    TopicQuestionComponent
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
    QuestionsModule
  ],
  providers: [],
  exports: [TopicComponent, TopicConstructorComponent, TopicMenuComponent, TopicQuestionComponent]
})

export class TopicModule {
}
