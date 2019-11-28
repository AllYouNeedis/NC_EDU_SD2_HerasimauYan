import {Component, OnInit} from '@angular/core';
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
  pollModel: Poll;
  pollAnswer: PollAnswer;
  id: number;

  constructor(private pollService: PollService,
              private activatedRoute: ActivatedRoute,
              private passedPollService: PassedPollService) {
    this.id = activatedRoute.snapshot.params.id;
    console.log(this.id);
  }

  ngOnInit(): void {
    this.pollService.getPollById(this.id).subscribe((data: Poll) => {
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
    const passedPollModel = new PassedPoll(this.id);
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
