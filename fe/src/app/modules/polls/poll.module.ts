import {NgModule} from '@angular/core';
import {PollComponent} from './components/poll.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {QuestionsModule} from '../questions/questions.module';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    PollComponent
  ],
  imports: [DragDropModule, BrowserModule, QuestionsModule, MatFormFieldModule, FormsModule, TextFieldModule, MatInputModule],
  providers: [],
  exports: [PollComponent]
})
export class PollModule {
}
