import {QuestionOption} from '../../question/models/question-option';

export class Topic {

  constructor() {
    this.shared = true;
    this.questions = [];
  }
  id?: number;
  title: string;
  shared: boolean;
  questions: QuestionOption[];

  static cloneBase(base: Topic): Topic {
    const result = new Topic();
    result.title = base.title;
    result.questions = [];
    base.questions.forEach( question => {
      result.questions.push(QuestionOption.cloneBase(question));
    });
    return result;
  }

  deleteQuestionOption(id: number) {
    this.questions.splice(id, 1);
  }
}
