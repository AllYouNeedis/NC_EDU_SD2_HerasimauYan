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
  private questionVariants: string[] = ['Текст варианта'];
  private title: string;
  private required: boolean;

  addVariant() {
    this.questionVariants.push('Текст варианта');
  }

  deleteVariant(id: number) {
    this.questionVariants.splice(id, 1);
  }
}
