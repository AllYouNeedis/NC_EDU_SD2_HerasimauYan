import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Poll} from '../modules/poll/models/poll';

@Injectable({providedIn: 'root'})
export class PollService {

  private topicsUrl = '/api/polls';  // URL to web api

  constructor(private http: HttpClient) {
  }

  addPoll(poll: Poll) {
    console.log(poll);
    this.http.post(this.topicsUrl, poll).subscribe((data: Poll) => console.log(data), error => console.log(error));
  }
}
