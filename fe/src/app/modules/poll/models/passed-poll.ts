import {AnswerOption} from '../../answer/models/answer-option';

export class PassedPoll {
  private id: number;
  private pollId: number;
  private answers: AnswerOption[];

  constructor(pollId: number) {
    this.pollId = pollId;
    this.answers = [];
  }

  static cloneBase(base: PassedPoll): PassedPoll {
    const result = new PassedPoll(base.pollId);
    result.id = base.id;
    base.answers.forEach(answerOption => {
      result.answers.push(AnswerOption.cloneBase(answerOption));
    });
    return result;
  }

  addAnswer(answer: AnswerOption): void {
    this.answers.push(answer);
  }

  getAnswers(): AnswerOption[] {
    return this.answers;
  }
}
