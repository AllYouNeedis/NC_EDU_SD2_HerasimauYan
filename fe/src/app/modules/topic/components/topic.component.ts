import {Component, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Topic} from '../models/topic';
import {QuestionOption} from '../../question/models/question-option';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})

export class TopicComponent implements OnInit {
  @Input()
  questionOnly;
  @Input()
  answerOnly;
  @Input()
  simple;
  @Input()
  @Output()
  private questionOption: QuestionOption;
  menuQuestion: QuestionOption[] = [];
  topicModel: Topic;

  ngOnInit(): void {
    this.topicModel = new Topic();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      const question = this.menuQuestion[event.previousIndex];
      this.topicModel.questions.push(new QuestionOption(question.type));
      moveItemInArray(event.container.data, this.topicModel.questions.length - 1, event.currentIndex);
    }
  }

}
