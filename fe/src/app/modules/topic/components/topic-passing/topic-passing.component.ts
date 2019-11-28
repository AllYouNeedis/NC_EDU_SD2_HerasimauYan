import {Component, Input, OnInit, Output} from '@angular/core';
import {Topic} from '../../models/topic';
import {TopicAnswer} from '../../models/topic-answer';

@Component({
  selector: 'app-topic-passing',
  templateUrl: './topic-passing.component.html',
  styleUrls: ['./topic-passing.component.css'],
})

export class TopicPassingComponent implements OnInit {
  @Input()
  topicModel: Topic;

  @Input()
  @Output()
  topicAnswer: TopicAnswer;

  ngOnInit(): void {
    this.topicAnswer.initAnswersContainer(this.topicModel);
  }
}
