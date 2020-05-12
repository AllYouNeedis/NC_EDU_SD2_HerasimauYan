import {QuestionVariant} from './question-variant';

export class QuestionOption {
  id?: number;
  title: string;
  type: string;
  questionVariants: QuestionVariant[];
  required: boolean;

  constructor(type: string) {
    this.type = type;
    this.required = false;
    this.questionVariants = [];
  }

  static cloneBaseWoId(base: QuestionOption): QuestionOption {
    const result = new QuestionOption(base.type);
    result.questionVariants = [];
    base.questionVariants.forEach( questionVariant => {
      result.questionVariants.push(new QuestionVariant(questionVariant.content));
    });
    result.required = base.required;
    result.title = base.title;
    return result;
  }

  static cloneBase(base: QuestionOption): QuestionOption {
    const result = new QuestionOption(base.type);
    result.id = base.id;
    result.questionVariants = [];
    base.questionVariants.forEach( questionVariant => {
      result.questionVariants.push(new QuestionVariant(questionVariant.content));
    });
    result.required = base.required;
    result.title = base.title;
    return result;
  }
}
