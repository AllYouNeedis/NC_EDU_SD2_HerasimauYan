export class AnswerVariant {
  id: number;
  content: string;

  constructor() {
    this.content = '';
  }

  static cloneBase(base: AnswerVariant): AnswerVariant {
    const result = new AnswerVariant();
    result.id = base.id;
    result.content = base.content;
    return result;
  }
}
