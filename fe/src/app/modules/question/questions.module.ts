import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TextFieldModule} from '@angular/cdk/text-field';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {QuestionDetailsComponent} from './components/question-details/question-details.component';
import {QuestionMenuComponent} from './components/question-menu/question-menu.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    QuestionDetailsComponent,
    QuestionMenuComponent
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
    DragDropModule
  ],
  providers: [],
  exports: [QuestionDetailsComponent, QuestionMenuComponent]
})

export class QuestionsModule {
}
