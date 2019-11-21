import {Component, Input, Output} from '@angular/core';
import {Topic} from '../../models/topic';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';

@Component({
  selector: 'app-topic-question-only',
  templateUrl: './topic-question-only.component.html',
  styleUrls: ['./topic-question-only.component.css'],
})

export class TopicQuestionOnlyComponent {
  @Input()
  @Output()
  private topicModel: Topic;

  // @ViewChild("text", {static: false})
  // text: ElementRef;
  //
  // @ViewChild("chooseOne", {static: false})
  // chooseOne: ElementRef;

  addQuestionOption() {

  }

  drop(event: CdkDragDrop<any[]>) {
   if (event.previousContainer === event.container) {
     moveItemInArray(this.topicModel.questions, event.previousIndex, event.currentIndex);
   } else {
     const draggedInData = event.previousContainer.data[event.previousIndex];
     if (draggedInData instanceof QuestionOption) {
       this.topicModel.questions.push(QuestionOption.cloneBase(draggedInData));
       moveItemInArray(this.topicModel.questions, this.topicModel.questions.length - 1, event.currentIndex);
     }
   }
  }

  deleteQuestionOption(i: number) {

  }
}
