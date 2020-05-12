import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Poll} from '../modules/poll/models/poll';
import {Observable, Subscription} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PollService {

  private pollsUrl = '/api/polls';  // URL to web api

  constructor(private http: HttpClient) {
  }

  addPoll(poll: Poll): Observable<any> {
    console.log(poll);
    return this.http.post(this.pollsUrl, poll);
  }

  getPollById(id: number): Observable<any> {
    return this.http.get(this.pollsUrl + '/' + id);
  }

  getPollsBySubmitted(id: string, submitted: boolean): Observable<any> {
    const params = new HttpParams({
      fromObject: {
        id,
        submitted: submitted.toString()
      }
    });
    return this.http.get(this.pollsUrl, {params});
  }
}
