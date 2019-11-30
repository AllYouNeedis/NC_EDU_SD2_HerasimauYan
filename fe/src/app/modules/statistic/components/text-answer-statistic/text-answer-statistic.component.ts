import {Component, Input, OnInit} from '@angular/core';
import {QuestionAnswerStatistic} from '../../models/question-answer-statistic';
import {StatisticModel} from '../../models/statistic-model';

@Component({
  selector: 'app-text-answer-statistic',
  templateUrl: './text-answer-statistic.component.html',
  styleUrls: ['./text-answer-statistic.component.css'],
})

export class TextAnswerStatisticComponent implements OnInit {
  @Input()
  questionAnswerModel: QuestionAnswerStatistic;
  statisticModels: StatisticModel[];
  legendTitle = 'Легенда';
  barPadding = 30;

  ngOnInit(): void {
    this.statisticModels = [];
    const answerVariants: string[] = [];
    this.questionAnswerModel.answers.forEach(answer => {
      const index = answerVariants.indexOf(answer.answerVariants[0].content);
      if (index !== -1) {
        this.statisticModels[index].value++;
      } else {
        answerVariants.push(answer.answerVariants[0].content);
        this.statisticModels.push(new StatisticModel(answer.answerVariants[0].content, 1));
      }
    });
  }
}
