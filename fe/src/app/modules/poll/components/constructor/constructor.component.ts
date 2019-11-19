import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {PollService} from '../../../../services/poll.service';
import {Poll} from '../../models/poll';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css'],
})

export class ConstructorComponent implements OnInit {
  menuQuestion: QuestionOption[] = [];
  pollModel: Poll;

  constructor(private pollService: PollService) {
  }

  ngOnInit(): void {
    this.menuQuestion.push(new QuestionOption('text'));
    this.menuQuestion.push(new QuestionOption('chooseOne'));
    this.pollModel = new Poll();
    this.pollModel.userId = +localStorage.getItem( 'user_id');
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      const question = this.menuQuestion[event.previousIndex];
      this.pollModel.addQuestionOption(question.cloneBaseType(question.type));
      moveItemInArray(event.container.data, this.pollModel.questions.length - 1, event.currentIndex);
    }
  }

  deleteQuestionOption(id: number) {
    this.pollModel.deleteQuestionOption(id);
  }

  submit() {
    this.pollService.addPoll(this.pollModel);
  }
}
