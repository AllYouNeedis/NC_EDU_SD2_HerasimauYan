import {SnackBarService} from '../snack-bar/snack-bar.service';
import {Injectable} from '@angular/core';
import {QuestionOption} from '../../modules/question/models/question-option';

@Injectable({
  providedIn: 'root'
})
export class QuestionValidateService {
  constructor(private snack: SnackBarService) {
  }

  public validString(str: string): boolean {
    return str != null && str.length > 0;
  }

  public isAllQuestionOptionsHasVariantValue(questions: QuestionOption[]) {
    if (questions.length === 0) { return true; }

    return questions.every(qo => {
      if (qo.type == 'text') {
        console.log(qo.type);
        return true;
      } else {
        if (qo.questionVariants.length > 2) {
          return qo.questionVariants.every(qv => {
            return qv.content != null && qv.content !== '';
          });
        } else {
          return false;
        }
      }
    });
  }

  isAllQuestionsHasTitle(questions: QuestionOption[]): boolean {
    return questions.every(qo => {
      return qo.title != null && qo.title !== '';
    });
  }

}
