import {Component, Input, OnInit} from '@angular/core';
import {PassedPoll} from '../../../poll/models/passed-poll';
import {QuestionAnswerStatistic} from '../../models/question-answer-statistic';
import {PollService} from '../../../../services/poll.service';
import {Poll} from '../../../poll/models/poll';
import {QuestionOption} from '../../../question/models/question-option';

@Component({
  selector: 'app-poll-statistic',
  templateUrl: './poll-statistic.component.html',
  styleUrls: ['./poll-statistic.component.css'],
})

export class PollStatisticComponent implements OnInit {
  questionAnswerModels: QuestionAnswerStatistic[];
  @Input()
  pollId: number;
  pollModel: Poll;
  passedNum: number;
  questions: QuestionOption[];
  inited = false;

  constructor(private pollService: PollService) {
  }

  ngOnInit(): void {
    this.pollService.getPollById(this.pollId)
      .subscribe((poll: Poll) => {
        this.pollModel = Poll.cloneBase(poll);
        console.log(this.pollModel);
        this.initQuestionAnswerModels();
        this.inited = true;
      }, error => console.log(error));
  }


  // constructor(private passedPollService: PassedPollService) {
  // }
  //
  // ngOnInit(): void {
  //   this.questionAnswerModels = [];
  //   this.passedPollService.getPassedPollsByPollId(this.pollId.toString())
  //     .subscribe((data: PassedPoll[]) => {
  //       this.passedPolls = [];
  //       data.forEach((passedPoll) => {
  //         this.passedPolls.push(PassedPoll.cloneBase(passedPoll));
  //       });
  //       console.log(this.passedPolls);
  //     }, error => console.log(error));
  // }

  initQuestionAnswerModels() {
    this.passedNum = this.pollModel.passedPolls.length;
    this.questionAnswerModels = [];
    this.pollModel.questions.forEach((question) => {
      this.questionAnswerModels.push(new QuestionAnswerStatistic(question));
    });
    this.pollModel.topics.forEach((topic) => {
      topic.questions.forEach((question) => {
        this.questionAnswerModels.push(new QuestionAnswerStatistic(question));
      });
    });
    this.questionAnswerModels.forEach((model) => {
      model.answers = this.pollModel.passedPolls.map((item: PassedPoll) => {
        return item.getAnswers().find(answer => answer.questionId === model.question.id);
      }).filter(item => item !== undefined);
    });
    console.log(this.questionAnswerModels);
  }
}
