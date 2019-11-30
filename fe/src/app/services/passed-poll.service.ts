import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PassedPoll} from '../modules/poll/models/passed-poll';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PassedPollService {

  private passedPollsUrl = '/api/passedPolls';  // URL to web api

  constructor(private http: HttpClient) {
  }

  passPoll(passedPoll: PassedPoll): Observable<any> {
    return this.http.post(this.passedPollsUrl, passedPoll);
  }

  getPassedPollsByPollId(pollId: string): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        pollId
      }
    });
    return this.http.get(this.passedPollsUrl, {params});
  }
}
