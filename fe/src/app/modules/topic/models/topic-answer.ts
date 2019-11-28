import {AnswerOption} from '../../answer/models/answer-option';
import {Topic} from './topic';

export class TopicAnswer {
  answers: AnswerOption[];

  initAnswersContainer(topicModel: Topic): void {
    const questionNum = topicModel.questions.length
    let i = 0;
    this.answers = [];
    for (i; i < questionNum; i++) {
      this.answers.push(new AnswerOption(topicModel.questions[i].id));
    }
  }
}
