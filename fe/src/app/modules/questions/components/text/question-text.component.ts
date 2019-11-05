import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.css'],
})

export class QuestionTextComponent {
  @Input()
  simple;
  @Input()
  questionOnly;
  @Input()
  private answerOnly;
  @Input()
  @Output()
  private questionText: string;
  private answerText: string;
  private required: boolean;
}

