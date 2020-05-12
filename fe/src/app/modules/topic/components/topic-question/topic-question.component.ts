import {AfterViewInit, Component, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {Topic} from '../../models/topic';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {DragDropService} from '../../../../services/drag-drop.service';

@Component({
  selector: 'app-topic-question-only',
  templateUrl: './topic-question.component.html',
  styleUrls: ['./topic-question.component.css'],
})

export class TopicQuestionComponent implements AfterViewInit, AfterViewInit, OnDestroy {
  @Input()
  @Output()
  private topicModel: Topic;

  @ViewChild(CdkDropList, {static: false})
  el: CdkDropList;

  constructor(private dragDropService: DragDropService) {
  }

  get dropListConnectedTo(): CdkDropList<any>[] {
    return this.dragDropService.getDropListConnectedToList();
  }

  ngAfterViewInit(): void {
    this.dragDropService.register(this.el);
  }

  ngOnDestroy(): void {
    this.dragDropService.delete(this.el);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.topicModel.questions, event.previousIndex, event.currentIndex);
    } else {
      const draggedInData = event.previousContainer.data[event.previousIndex];
      if (draggedInData instanceof QuestionOption) {
        if (event.previousContainer.id === 'question-menu') {
          this.topicModel.questions.push(QuestionOption.cloneBaseWoId(draggedInData));
          moveItemInArray(this.topicModel.questions, this.topicModel.questions.length - 1, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
      }
    }
  }
}
