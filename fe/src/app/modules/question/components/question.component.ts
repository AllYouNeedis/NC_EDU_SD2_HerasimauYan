import {Component, Input, Output} from '@angular/core';
import {QuestionOption} from '../models/question-option';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})

export class QuestionComponent {
  @Input()
  questionOnly;
  @Input()
  answerOnly;
  @Input()
  simple;
  @Input()
  @Output()
  private questionOption: QuestionOption;

  addVariant() {
    this.questionOption.elements.push('');
  }

  deleteVariant(id: number) {
    this.questionOption.elements.splice(id, 1);
  }
}
