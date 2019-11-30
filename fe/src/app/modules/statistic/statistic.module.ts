import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {PieStatisticComponent} from './components/pie-statistic/pie-statistic.component';
import {NgxChartsModule, PieChartModule} from '@swimlane/ngx-charts';
import {PollStatisticComponent} from './components/poll-statistic/poll-statistic.component';
import {MatCardModule} from '@angular/material';
import {TextAnswerStatisticComponent} from './components/text-answer-statistic/text-answer-statistic.component';

@NgModule({
  declarations: [
    PieStatisticComponent,
    PollStatisticComponent,
    TextAnswerStatisticComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    PieChartModule,
    MatCardModule,
    NgxChartsModule,
  ],
  providers: [],
  exports: [
    PieStatisticComponent,
    PollStatisticComponent,
    TextAnswerStatisticComponent
  ]
})

export class StatisticModule {
}
