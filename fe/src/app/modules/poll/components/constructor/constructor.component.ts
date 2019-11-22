import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {PollService} from '../../../../services/poll.service';
import {Poll} from '../../models/poll';
import {Topic} from '../../../topic/models/topic';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css'],
})

export class ConstructorComponent implements OnInit {
  pollModel: Poll;

  constructor(private pollService: PollService) {
  }

  ngOnInit(): void {
    this.pollModel = new Poll();
    this.pollModel.userId = +localStorage.getItem('user_id');
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

  submit() {
    this.pollModel.submitted = true;
    this.pollService.addPoll(this.pollModel);
  }
}
