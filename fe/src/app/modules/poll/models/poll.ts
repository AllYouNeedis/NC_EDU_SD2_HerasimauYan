import {QuestionOption} from '../../question/models/question-option';
import {Topic} from '../../topic/models/topic';

export class Poll {
  title: string;
  submitted: boolean;
  userId: number;
  questions: QuestionOption[] = [];
  topics: Topic[] = [];

  constructor() {
  }

  addTopic(topic: Topic) {
    this.topics.push(topic);
  }

  addQuestionOption(question: QuestionOption) {
    this.questions.push(question);
  }

  deleteQuestionOption(id: number) {
    this.questions.splice(id, 1);
  }
}
