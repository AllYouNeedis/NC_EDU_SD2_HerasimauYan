import {Component} from '@angular/core';

@Component({
  selector: 'app-question-choose-any',
  templateUrl: './question-choose-any.component.html'
})

export class QuestionChooseAnyComponent {
  private question = 'Текстовый вопрос';
  private answer = 'Ответ на текстовый вопрос';
}
