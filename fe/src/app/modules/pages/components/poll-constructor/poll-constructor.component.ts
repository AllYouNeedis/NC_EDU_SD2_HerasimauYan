import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poll-constructor',
  templateUrl: './poll-constructor.component.html'
})

export class PollConstructorComponent {
  pollId: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.pollId = activatedRoute.snapshot.params.id;
    console.log(this.pollId);
  }

}
