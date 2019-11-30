import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {PollService} from '../../../../services/poll.service';
import {Poll} from '../../models/poll';
import {Topic} from '../../../topic/models/topic';
import {DragDropService} from '../../../../services/drag-drop.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unsubmitted-poll-list',
  templateUrl: './unsubmitted-poll-list.component.html',
  styleUrls: ['./unsubmitted-poll-list.component.css'],
})

export class UnsubmittedPollListComponent implements OnInit {
  polls: Poll[];

  constructor(private pollService: PollService,
              private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');

    this.pollService.getPollsBySubmitted(userId, false)
      .subscribe((data: Poll[]) => {
        this.polls = data;
      }, error => console.log(error));
  }

  navigate(pollId: number) {
    this.router.navigate(['/poll-constructor', pollId]);
  }
}
