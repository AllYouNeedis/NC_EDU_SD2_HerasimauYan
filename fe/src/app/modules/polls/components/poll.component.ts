import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../users/models/question-option';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})

export class PollComponent implements OnInit {
  title: string;
  menuQuestion: QuestionOption[] = [];
  questions: QuestionOption[] = [];

  ngOnInit(): void {
    this.menuQuestion.push(new QuestionOption('text'));
    this.menuQuestion.push(new QuestionOption('chooseOne'));
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      const question = this.menuQuestion[event.previousIndex];
      this.questions.push(question.cloneBaseType(question.type));
      moveItemInArray(event.container.data, this.questions.length - 1, event.currentIndex);
    }
  }
}
