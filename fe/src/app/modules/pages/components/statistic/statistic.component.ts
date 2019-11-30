import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html'
})
export class StatisticComponent {
  pollId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.pollId = +activatedRoute.snapshot.params.id;
    console.log(this.pollId);
  }
}
