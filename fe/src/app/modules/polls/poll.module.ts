import {NgModule} from '@angular/core';
import {PollComponent} from './components/poll.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {QuestionsModule} from '../questions/questions.module';

@NgModule({
  declarations: [
    PollComponent
  ],
  imports: [DragDropModule, BrowserModule, QuestionsModule],
  providers: [],
  exports: [PollComponent]
})
export class PollModule {
}
