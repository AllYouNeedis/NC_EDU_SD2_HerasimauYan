import {QuestionOption} from '../../question/models/question-option';

export class Topic {
  title: string;
  shared: boolean;
  questions: QuestionOption[];

  constructor() {
    this.shared = true;
    this.questions = [];
  }

  deleteQuestionOption(id: number) {
    this.questions.splice(id, 1);
  }
}
