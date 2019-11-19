import {Component, ElementRef, Input, Output, ViewChild} from '@angular/core';
import {AnswerOption} from '../models/answer-option';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})

export class AnswerComponent {
  @Input()
  questionOnly;
  @Input()
  answerOnly;
  @Input()
  simple;
  @Input()
  @Output()
  private answer: AnswerOption;

  // @ViewChild("text", {static: false})
  // text: ElementRef;
  //
  // @ViewChild("chooseOne", {static: false})
  // chooseOne: ElementRef;

  // addVariant() {
  //   this.questionOption.questionVariants.push(new QuestionVariant());
  // }
  //
  // deleteVariant(id: number) {
  //   this.questionOption.questionVariants.splice(id, 1);
  // }
}
