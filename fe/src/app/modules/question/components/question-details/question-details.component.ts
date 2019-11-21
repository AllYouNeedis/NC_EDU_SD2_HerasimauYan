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
  questionOnly;
  @Input()
  answerOnly;
  @Input()
  simple;
  @Input()
  @Output()
  private questionOption: QuestionOption;

  // @ViewChild("text", {static: false})
  // text: ElementRef;
  //
  // @ViewChild("chooseOne", {static: false})
  // chooseOne: ElementRef;

  addVariant() {
    this.questionOption.questionVariants.push(new QuestionVariant(''));
  }

  deleteVariant(id: number) {
    this.questionOption.questionVariants.splice(id, 1);
  }
}
