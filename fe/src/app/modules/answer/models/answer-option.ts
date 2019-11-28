import {AnswerVariant} from './answer-variant';

export class AnswerOption {
  id: number;
  answerVariants: AnswerVariant[];
  questionId: number;

  constructor(questionId: number) {
    this.id = 0;

    this.questionId = questionId;
    this.answerVariants = [];
    this.answerVariants.push(new AnswerVariant());
  }
}

