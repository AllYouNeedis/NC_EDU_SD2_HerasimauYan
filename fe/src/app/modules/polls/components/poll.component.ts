import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'],
})

export class PollComponent {
  menuComponents: any[] = [];
  childes: any[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.childes.push(event.item.element.nativeElement.firstChild);
      moveItemInArray(this.childes, this.childes.length - 1, event.currentIndex);
    }
  }
}
