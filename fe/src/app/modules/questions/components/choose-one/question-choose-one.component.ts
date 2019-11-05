import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-question-choose-one',
  templateUrl: './question-choose-one.component.html',
  styleUrls: ['./question-choose-one.component.css']
})

export class QuestionChooseOneComponent {
  @Input()
  simple;
  @Input()
  questionOnly;
  @Input()
  answerOnly;
  private questionVariants: string[] = ['Вариант 1'];
  private title: string;
  private required: boolean;

  addVariant() {
    this.questionVariants.push('Вариант '.concat((this.questionVariants.length + 1).toString()));
  }

  deleteVariant(id: number) {
    this.questionVariants.splice(id, 1);
  }
}
