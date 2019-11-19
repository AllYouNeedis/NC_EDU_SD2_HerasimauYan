import {Component, ElementRef, Input, Output, ViewChild} from '@angular/core';
import {QuestionOption} from '../models/question-option';
import {QuestionVariant} from '../models/question-variant';

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

  // @ViewChild("text", {static: false})
  // text: ElementRef;
  //
  // @ViewChild("chooseOne", {static: false})
  // chooseOne: ElementRef;

  addVariant() {
    this.questionOption.questionVariants.push(new QuestionVariant());
  }

  deleteVariant(id: number) {
    this.questionOption.questionVariants.splice(id, 1);
  }
}
