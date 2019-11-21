import {QuestionVariant} from './question-variant';

export class QuestionOption {
  title: string;
  type: string;
  questionVariants: QuestionVariant[];
  required: boolean;

  constructor(type: string) {
    this.type = type;
    this.required = false;
    this.questionVariants = [];
  }

  static cloneBase(base: QuestionOption): QuestionOption {
    const result = new QuestionOption(base.type);
    result.questionVariants = [];
    base.questionVariants.forEach( questionVariant => {
      result.questionVariants.push(new QuestionVariant(questionVariant.content));
    });
    result.required = base.required;
    result.title = base.title;
    return result;
  }
}
