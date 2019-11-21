import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../models/question-option';

@Component({
  selector: 'app-question-menu',
  templateUrl: './question-menu.component.html',
  styleUrls: ['./question-menu.component.css'],
})

export class QuestionMenuComponent implements OnInit {
  menuQuestion: QuestionOption[] = [];

  ngOnInit(): void {
    this.menuQuestion.push(new QuestionOption('text'));
    this.menuQuestion.push(new QuestionOption('chooseOne'));
  }

  dropQuestion(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
