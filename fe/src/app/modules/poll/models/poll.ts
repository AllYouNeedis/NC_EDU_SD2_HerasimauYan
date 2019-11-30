import {QuestionOption} from '../../question/models/question-option';
import {Topic} from '../../topic/models/topic';
import {PassedPoll} from './passed-poll';

export class Poll {
  id: number;
  title: string;
  submitted: boolean;
  userId: number;
  questions: QuestionOption[];
  topics: Topic[];
  passedPolls?: PassedPoll[];

  constructor() {
    this.title = '';
    this.questions = [];
    this.topics = [];
  }

  static cloneBase(base: Poll): Poll {
    const result = new Poll();
    result.id = base.id;
    result.title = base.title;
    result.submitted = base.submitted;
    result.userId = base.userId;
    result.questions = [];
    result.topics = [];
    result.passedPolls = [];
    base.questions.forEach( question => {
      result.questions.push(QuestionOption.cloneBase(question));
    });
    base.topics.forEach( topic => {
      result.topics.push(Topic.cloneBase(topic));
    });
    base.passedPolls.forEach( passedPoll => {
      result.passedPolls.push(PassedPoll.cloneBase(passedPoll));
    });

    return result;
  }

  addTopic(topic: Topic) {
    this.topics.push(topic);
  }

  deleteTopic(id: number) {
    this.topics.splice(id, 1);
  }

  addQuestionOption(question: QuestionOption) {
    this.questions.push(question);
  }

  deleteQuestionOption(id: number) {
    this.questions.splice(id, 1);
  }
}
