import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Topic} from '../../models/topic';
import {TopicService} from '../../../../services/topic.service';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {DragDropService} from '../../../../services/drag-drop.service';

@Component({
  selector: 'app-topic-menu',
  templateUrl: './topic-menu.component.html',
  styleUrls: ['./topic-menu.component.css'],
})

export class TopicMenuComponent implements OnInit, AfterViewInit {
  menuTopic: Topic[] = [];

  @ViewChild(CdkDropList, {static: false})
  el: CdkDropList;

  constructor(private topicService: TopicService,
              private dragDropService: DragDropService) {
  }

  ngOnInit(): void {
    const emptyTopic = new Topic(false);
    emptyTopic.title = 'Пустая тема';
    this.menuTopic.push(emptyTopic);
    this.topicService.getSharedTopics()
      .subscribe((data: Topic[]) => {
        data.forEach(value => {
          this.menuTopic.push(Topic.cloneBase(value));
        });
        this.menuTopic.forEach(topic => {
          topic.shared = false;
        });
      });
  }

  ngAfterViewInit(): void {
    this.dragDropService.register(this.el);
  }

  get dropListConnectedTo(): CdkDropList<any>[] {
    return this.dragDropService.getDropListConnectedToList();
  }


  dropTopic(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
