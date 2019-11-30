import {Component, Input, OnInit} from '@angular/core';
import {StatisticModel} from '../../models/statistic-model';
import {QuestionAnswerStatistic} from '../../models/question-answer-statistic';

@Component({
  selector: 'app-pie-statistic',
  templateUrl: './pie-statistic.component.html',
  styleUrls: ['./pie-statistic.component.css'],
})

export class PieStatisticComponent implements OnInit {
  @Input()
  questionAnswerModel: QuestionAnswerStatistic;
  statisticModels: StatisticModel[];
  legendTitle = 'Легенда';

  ngOnInit(): void {
    this.statisticModels = [];
    const questionVariants: string[] = [];
    this.questionAnswerModel.question.questionVariants.forEach(value => {
      questionVariants.push(value.content);
      this.statisticModels.push(new StatisticModel(value.content, 0));
    });
    this.questionAnswerModel.answers.forEach(answer => {
      answer.answerVariants.forEach(value => {
        const index = questionVariants.indexOf(value.content);
        this.statisticModels[index].value++;
      });
    });
  }
}
