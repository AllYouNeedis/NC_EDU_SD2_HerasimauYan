import {Component, Input, Output} from '@angular/core';
import {AnswerOption} from '../models/answer-option';
import {QuestionOption} from '../../question/models/question-option';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})

export class AnswerComponent {
  @Input()
  @Output()
  private answer: AnswerOption;

  @Input()
  private questionOption: QuestionOption;
}
