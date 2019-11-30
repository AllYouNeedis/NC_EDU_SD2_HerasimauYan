import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poll-passing-page',
  templateUrl: './poll-passing-page.component.html'
})
export class PollPassingPageComponent {
  pollId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.pollId = +activatedRoute.snapshot.params.id;
    console.log(this.pollId);
  }
}
