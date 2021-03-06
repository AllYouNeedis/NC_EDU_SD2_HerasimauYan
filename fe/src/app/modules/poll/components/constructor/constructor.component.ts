import {AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {PollService} from '../../../../services/poll.service';
import {Poll} from '../../models/poll';
import {Topic} from '../../../topic/models/topic';
import {DragDropService} from '../../../../services/drag-drop.service';
import {StorageService} from '../../../../services/storage/storage.service';
import {SnackBarService} from '../../../../services/snack-bar/snack-bar.service';
import {Router} from '@angular/router';
import {QuestionValidateService} from '../../../../services/question-validate/question-validate.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css'],
})

export class ConstructorComponent implements OnInit, AfterContentInit {
  pollModel: Poll;
  @Input()
  pollId: string;
  inited: boolean;

  @ViewChild(CdkDropList, {static: false})
  el: CdkDropList;

  constructor(private pollService: PollService,
              private dragDropService: DragDropService,
              private storage: StorageService,
              private snack: SnackBarService,
              private val: QuestionValidateService,
              private router: Router) {
  }

  ngOnInit(): void {
    const userId = this.storage.getCurrentUser().id;
    this.inited = false;
    if (this.pollId === 'new') {
      this.pollModel = new Poll();
      this.pollModel.userId = userId;
      this.inited = true;
    } else {
      this.pollService.getPollById(+this.pollId)
        .subscribe((data: Poll) => {
        this.pollModel = Poll.cloneBase(data);
        console.log(this.pollModel);
        this.inited = true;
      }, error => console.log(error));
    }
  }

  ngAfterContentInit(): void {
    this.dragDropService.register(this.el);
  }

  get dropListConnectedTo(): CdkDropList<any>[] {
    return this.dragDropService.getDropListConnectedToList();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.container === event.previousContainer) { // двигаем внутри конструктора
      this.changePos(event.previousIndex, event.currentIndex);
    } else {
      const draggedInData = event.previousContainer.data[event.previousIndex];

      if (draggedInData instanceof QuestionOption) {
        this.pollModel.addQuestionOption(QuestionOption.cloneBase(draggedInData));
        this.changePos(this.pollModel.questions.length - 1, event.currentIndex);
      }

      if (draggedInData instanceof Topic) {
        this.pollModel.addTopic(Topic.cloneBase(draggedInData));
        this.changePos(this.pollModel.topics.length - 1, event.currentIndex);
      }
      console.log(event);
    }
  }

  changePos(prev: number, curr: number): void {
    const topicsNum = this.pollModel.topics.length;
    if (prev >= topicsNum) { // двигаем вопросы
      moveItemInArray(this.pollModel.questions, prev, curr >= topicsNum ? curr : topicsNum);
    } else {  // двигаем темы
      moveItemInArray(this.pollModel.topics, prev, curr >= topicsNum ? topicsNum : curr);
    }
  }

  deleteQuestionOption(id: number) {
    this.pollModel.deleteQuestionOption(id);
  }

  deleteTopic(id: number) {
    this.pollModel.deleteTopic(id);
  }

  submit() {
    if (!this.val.validString(this.pollModel.title)) {
      this.snack.openErrorSnackBar('Опрос должен содержать заголовок!!!');
      return;
    }
    if (!this.val.isAllQuestionsHasTitle(this.pollModel.questions)) {
      this.snack.openErrorSnackBar('Все вопросы должны содержать заголовок!!!');
      return;
    }
    if (!this.pollModel.topics.every(topic => this.val.isAllQuestionsHasTitle(topic.questions))) {
      this.snack.openErrorSnackBar('Все вопросы в темах должны содержать заголовок!');
      return;
    }
    if (this.pollModel.questions.length !== 0 || !this.val.isAllQuestionOptionsHasVariantValue(this.pollModel.questions)) {
      this.snack.openErrorSnackBar('Все вопросы с вариантами должны содержать как минимум 2 непустых варианта!');
      return;
    }
    if (this.pollModel.topics.every(topic => this.val.isAllQuestionOptionsHasVariantValue(topic.questions))) {
      this.snack.openErrorSnackBar('Все вопросы с вариантами в темах должны содержать как минимум 2 непустых варианта!');
    }
    if (this.pollModel.questions.length === 0 && this.pollModel.topics.every(topic => topic.questions.length === 0)) {
      this.snack.openErrorSnackBar('Опрос должен содержать хотя бы один вопрос....');
      return;
    }

    this.pollModel.submitted = true;
    this.pollService.addPoll(this.pollModel).subscribe(poll => {
      this.snack.openLongSnackBar('Опрос успешно засабмичен! Ссылка на опрос: http://localhost:4200/poll/' + poll.id);
      this.router.navigate(['/home']);
    });
  }

  saveAsDraft() {
    this.pollModel.submitted = false;
    this.pollService.addPoll(this.pollModel).subscribe(poll => {
      this.snack.openSnackBar('Опрос успешно сохранен! Заголовок опроса: ' + poll.title);
      this.router.navigate(['/home']);
    });


  }
}
