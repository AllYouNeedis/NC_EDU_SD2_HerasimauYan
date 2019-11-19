import {Component} from '@angular/core';
import {PollService} from '../../../../services/poll.service';
import {PassedPoll} from '../../models/passed-poll';

@Component({
  selector: 'app-passing-poll',
  templateUrl: './passing.component.html',
  styleUrls: ['./passing.component.css'],
})

export class PassingComponent {
  pollModel: PassedPoll;

  constructor(private pollService: PollService) {
  }

}
