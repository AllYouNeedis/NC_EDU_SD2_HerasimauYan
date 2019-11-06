export class QuestionOption {
  title?: string;
  type: string;
  elements?: string[];
  required?: boolean;

  constructor(type: string) {
    this.type = type;
    this.elements = [];
  }

  cloneBaseType(type: string): QuestionOption {
    return new QuestionOption(type);
  }
}
