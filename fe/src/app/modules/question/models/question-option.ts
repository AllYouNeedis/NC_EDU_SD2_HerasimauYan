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

  cloneBaseType(type: string): QuestionOption {
    return new QuestionOption(type);
  }
}
