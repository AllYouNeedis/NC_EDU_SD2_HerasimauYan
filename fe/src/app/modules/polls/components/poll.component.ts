import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})

export class PollComponent {
  title: string;
  description: string;
  menuComponents: any[] = [];
  childes: any[] = [];
  questions: any[] = [];
  id = 0;

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.childes.push({nodeName: event.item.element.nativeElement.firstChild.nodeName, id: this.id++});
      moveItemInArray(this.childes, this.childes.length - 1, event.currentIndex);
    }
    switch (event.item.element.nativeElement.firstChild.nodeName) {
      case "APP-QUESTION-TEXT":
        this.questions.push();
        break;
    }
  }
}
