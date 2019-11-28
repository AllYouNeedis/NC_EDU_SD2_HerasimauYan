import {AnswerOption} from '../../answer/models/answer-option';

export class PassedPoll {
  private pollId: number;
  private answers: AnswerOption[];

  constructor(pollId: number) {
    this.pollId = pollId;
    this.answers = [];
  }

  addAnswer(answer: AnswerOption): void {
    this.answers.push(answer);
  }

  getAnswers(): AnswerOption[] {
    return this.answers;
  }
}
