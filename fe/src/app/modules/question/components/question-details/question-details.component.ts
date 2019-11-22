import {Component, Input, Output} from '@angular/core';
import {QuestionOption} from '../../models/question-option';
import {QuestionVariant} from '../../models/question-variant';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css'],
})

export class QuestionDetailsComponent {
  @Input()
  @Output()
  private questionOption: QuestionOption;

  addVariant() {
    this.questionOption.questionVariants.push(new QuestionVariant(''));
  }

  deleteVariant(id: number) {
    this.questionOption.questionVariants.splice(id, 1);
  }
}
