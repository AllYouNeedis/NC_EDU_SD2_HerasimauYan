import {QuestionOption} from '../../question/models/question-option';
import {AnswerOption} from '../../answer/models/answer-option';

export class QuestionAnswerStatistic {
  question: QuestionOption;
  answers: AnswerOption[];

  constructor(question: QuestionOption) {
    this.question = question;
    this.answers = [];
  }
}
