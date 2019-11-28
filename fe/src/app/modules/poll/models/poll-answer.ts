import {AnswerOption} from '../../answer/models/answer-option';
import {TopicAnswer} from '../../topic/models/topic-answer';
import {Poll} from './poll';

export class PollAnswer {
  questionAnswers: AnswerOption[];
  topicAnswers: TopicAnswer[];

  constructor() {
  }

  initPollAnswerContainer(pollModel: Poll) {
    const questionNumber = pollModel.questions.length;
    const topicNumber = pollModel.topics.length;
    this.questionAnswers = [];
    let i;
    for (i = 0; i < questionNumber; i++) {
      this.questionAnswers.push(new AnswerOption(pollModel.questions[i].id));
    }
    this.topicAnswers = [];
    for (i = 0; i < topicNumber; i++) {
      this.topicAnswers.push(new TopicAnswer());
    }
  }
}
