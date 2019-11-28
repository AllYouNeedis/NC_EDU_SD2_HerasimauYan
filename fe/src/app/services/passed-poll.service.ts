import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PassedPoll} from '../modules/poll/models/passed-poll';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PassedPollService {

  private pollsUrl = '/api/passedPolls';  // URL to web api

  constructor(private http: HttpClient) {
  }

  passPoll(passedPoll: PassedPoll): Observable<any> {
    return this.http.post(this.pollsUrl, passedPoll);
  }
}
