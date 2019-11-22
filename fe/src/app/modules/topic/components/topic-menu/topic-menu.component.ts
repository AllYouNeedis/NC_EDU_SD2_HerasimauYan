import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Topic} from '../../models/topic';
import {TopicService} from '../../../../services/topic.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-topic-menu',
  templateUrl: './topic-menu.component.html',
  styleUrls: ['./topic-menu.component.css'],
})

export class TopicMenuComponent implements OnInit, AfterViewInit {
  menuTopic: Topic[] = [];

  constructor(private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.topicService.getSharedTopics()
      .subscribe((data: Topic[]) => {
        data.forEach(value => {
          this.menuTopic.push(Topic.cloneBase(value));
      });
    });
    console.log(this.menuTopic);
  }

  ngAfterViewInit(): void {
    console.log('менюшка топиков тоже тут');
  }

  dropTopic(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
