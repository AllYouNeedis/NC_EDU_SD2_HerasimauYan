import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {QuestionOption} from '../../../question/models/question-option';
import {PollService} from '../../../../services/poll.service';
import {Poll} from '../../models/poll';
import {Topic} from '../../../topic/models/topic';
import {DragDropService} from '../../../../services/drag-drop.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submitted-poll-list',
  templateUrl: './submitted-poll-list.component.html',
  styleUrls: ['./submitted-poll-list.component.css'],
})

export class SubmittedPollListComponent implements OnInit {
  polls: Poll[];

  constructor(private pollService: PollService,
              private router: Router) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('user_id');
    this.pollService.getPollsBySubmitted(userId, true)
      .subscribe((data: Poll[]) => {
        this.polls = data;
    }, error => console.log(error));
  }

  navigate(pollId: number) {
    this.router.navigate(['/statistic', pollId]);
  }
}
