import {AnswerVariant} from './answer-variant';

export class AnswerOption {
  id: number;
  answerVariants: AnswerVariant[];
  questionId: number;

  constructor(questionId: number) {
    this.questionId = questionId;
    this.answerVariants = [];
    this.answerVariants.push(new AnswerVariant());
  }

  static cloneBase(base: AnswerOption): AnswerOption {
    const result: AnswerOption = new AnswerOption(base.questionId);
    result.answerVariants = [];
    base.answerVariants.forEach(answerVariant => {
      result.answerVariants.push(AnswerVariant.cloneBase(answerVariant));
    });
    return result;
  }
}

