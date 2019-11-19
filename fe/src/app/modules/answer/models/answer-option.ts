import {AnswerVariant} from './answer-variant';
import {QuestionOption} from '../../question/models/question-option';

export class AnswerOption {
  answerVariants: AnswerVariant[];
  question: QuestionOption;
}

