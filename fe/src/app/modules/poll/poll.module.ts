import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {QuestionsModule} from '../question/questions.module';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';
import {PassingComponent} from './components/passing/passing.component';
import {ConstructorComponent} from './components/constructor/constructor.component';
import {TopicService} from '../../services/topic.service';
import {TopicModule} from '../topic/topic.module';

@NgModule({
  declarations: [
    ConstructorComponent,
    PassingComponent
  ],
  imports: [DragDropModule,
    BrowserModule,
    QuestionsModule,
    MatFormFieldModule,
    FormsModule,
    TextFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule, TopicModule, MatIconModule],
  providers: [TopicService],
  exports: [ConstructorComponent, PassingComponent]
})
export class PollModule {
}
