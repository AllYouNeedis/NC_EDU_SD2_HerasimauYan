import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {Topic} from '../../models/topic';
import {TopicService} from '../../../../services/topic.service';

@Component({
  selector: 'app-topic-constructor',
  templateUrl: './topic-constructor.component.html',
  styleUrls: ['./topic-constructor.component.css'],
})

export class TopicConstructorComponent implements OnInit {
  menuTopic: Topic[] = [];
  menuQuestion: QuestionOption[] = [];
  topicModel: Topic;

  constructor(private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.menuQuestion.push(new QuestionOption('text'));
    this.menuQuestion.push(new QuestionOption('chooseOne'));
    this.topicModel = new Topic();
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

  submit() {
    this.topicService.addTopic(this.topicModel);
  }
}
