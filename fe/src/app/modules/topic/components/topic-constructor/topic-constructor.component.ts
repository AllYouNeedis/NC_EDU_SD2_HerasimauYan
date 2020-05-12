import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {Topic} from '../../models/topic';
import {TopicService} from '../../../../services/topic.service';
import {SnackBarService} from '../../../../services/snack-bar/snack-bar.service';
import {Router} from '@angular/router';
import {QuestionValidateService} from '../../../../services/question-validate/question-validate.service';

@Component({
  selector: 'app-topic-constructor',
  templateUrl: './topic-constructor.component.html',
  styleUrls: ['./topic-constructor.component.css'],
})

export class TopicConstructorComponent implements OnInit {
  menuQuestion: QuestionOption[] = [];
  topicModel: Topic;

  constructor(private topicService: TopicService,
              private snack: SnackBarService,
              private val: QuestionValidateService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.menuQuestion.push(new QuestionOption('text'));
    this.menuQuestion.push(new QuestionOption('chooseOne'));
    this.topicModel = new Topic(true);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const question = this.menuQuestion[event.previousIndex];
      this.topicModel.questions.push(new QuestionOption(question.type));
      moveItemInArray(event.container.data, this.topicModel.questions.length - 1, event.currentIndex);
    }
  }

  deleteQuestionOption(id: number) {
    this.topicModel.deleteQuestionOption(id);
  }

  submit() {
    if (!this.val.validString(this.topicModel.title)) {
      this.snack.openSnackBar('Тема должна содержать заголовок!');
      return;
    }

    if (!this.val.isAllQuestionsHasTitle(this.topicModel.questions)) {
      this.snack.openSnackBar('Все вопросы должны быть непустыми');
      return;
    }

    if (!this.val.isAllQuestionOptionsHasVariantValue(this.topicModel.questions)) {
      this.snack.openSnackBar('Все вопросы с вариантами ответа должны иметь как минимум два непустых варианта!');
      return;
    }

    if (this.topicModel.questions.length === 0) {
      this.snack.openSnackBar('В теме должен быть хотя бы один вопрос..');
      return;
    }

    this.topicService.addTopic(this.topicModel).subscribe(topic => {
      this.snack.openSnackBar('Тема с заголовком ' + topic.title + 'успешно создана!');
      this.router.navigate(['/home']);
    }, error => {
      this.snack.openSnackBar('Произошла ошибка! Посмотрите в консоль для детальной информации..');
      console.error(error);
    });
  }
}
