import {Component, Input, OnInit} from '@angular/core';
import {PollService} from '../../../../services/poll.service';
import {PassedPoll} from '../../models/passed-poll';
import {ActivatedRoute} from '@angular/router';
import {Poll} from '../../models/poll';
import {PollAnswer} from '../../models/poll-answer';
import {PassedPollService} from '../../../../services/passed-poll.service';

@Component({
  selector: 'app-passing-poll',
  templateUrl: './passing.component.html',
  styleUrls: ['./passing.component.css'],
})

export class PassingComponent implements OnInit {
  @Input()
  pollId: number;
  pollModel: Poll;
  pollAnswer: PollAnswer;

  constructor(private pollService: PollService,
              private passedPollService: PassedPollService) {
  }

  ngOnInit(): void {
    this.pollService.getPollById(this.pollId).subscribe((data: Poll) => {
      this.pollModel = Poll.cloneBase(data);
      console.log(this.pollModel);
      this.pollAnswer = new PollAnswer();
      this.pollAnswer.initPollAnswerContainer(this.pollModel);
    }, error => {
      console.log(error);
    });
  }

  submit() {
    console.log(this.pollAnswer);
    const passedPollModel = new PassedPoll(this.pollId);
    this.pollAnswer.topicAnswers.forEach(topic => {
      topic.answers.forEach(answer => {
        passedPollModel.addAnswer(answer);
      });
    });

    this.pollAnswer.questionAnswers.forEach(answer => {
      passedPollModel.addAnswer(answer);
    });
    console.log(passedPollModel);
    this.passedPollService.passPoll(passedPollModel).subscribe((next) => {
      alert('ok');
    }, error => console.log(error));
  }

}
