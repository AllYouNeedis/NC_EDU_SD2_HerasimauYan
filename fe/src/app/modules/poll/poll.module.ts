import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {QuestionsModule} from '../question/questions.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import {PassingComponent} from './components/passing/passing.component';
import {ConstructorComponent} from './components/constructor/constructor.component';
import {TopicService} from '../../services/topic.service';
import {TopicModule} from '../topic/topic.module';
import {SubmittedPollListComponent} from './components/submitted-poll-list/submitted-poll-list.component';
import {UnsubmittedPollListComponent} from './components/unsubmitted-poll-list/unsubmitted-poll-list.component';

@NgModule({
  declarations: [
    ConstructorComponent,
    PassingComponent,
    SubmittedPollListComponent,
    UnsubmittedPollListComponent
  ],
  imports: [DragDropModule,
    BrowserModule,
    QuestionsModule,
    MatFormFieldModule,
    FormsModule,
    TextFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule, TopicModule, MatIconModule, MatCardModule, MatListModule],
  providers: [TopicService],
  exports: [
    ConstructorComponent,
    PassingComponent,
    SubmittedPollListComponent,
    UnsubmittedPollListComponent
  ]
})
export class PollModule {
}
