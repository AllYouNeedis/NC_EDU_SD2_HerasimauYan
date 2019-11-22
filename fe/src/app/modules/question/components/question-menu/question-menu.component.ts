import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../models/question-option';
import {DragDropService} from '../../../../services/drag-drop.service';

@Component({
  selector: 'app-question-menu',
  templateUrl: './question-menu.component.html',
  styleUrls: ['./question-menu.component.css'],
})

export class QuestionMenuComponent implements OnInit, AfterViewInit {
  menuQuestion: QuestionOption[] = [];

  @ViewChild(CdkDropList, {static: false}) el: CdkDropList;

  constructor(private dragDropService: DragDropService) {
  }

  ngOnInit(): void {
    this.menuQuestion.push(new QuestionOption('text'));
    this.menuQuestion.push(new QuestionOption('chooseOne'));
  }

  get dropListConnectedTo(): CdkDropList<any>[] {
    return this.dragDropService.getDropListConnectedToList();
  }

  ngAfterViewInit(): void {
    this.dragDropService.register(this.el);
  }

  dropQuestion(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
