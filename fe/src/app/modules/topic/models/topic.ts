import {QuestionOption} from '../../question/models/question-option';

export class Topic {

  constructor(shared: boolean) {
    this.shared = shared;
    this.questions = [];
  }
  id?: number;
  title: string;
  shared: boolean;
  questions: QuestionOption[];

  static cloneBase(base: Topic): Topic {
    const result = new Topic(base.shared);
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
