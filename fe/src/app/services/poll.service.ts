import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Poll} from '../modules/poll/models/poll';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PollService {

  private pollsUrl = '/api/polls';  // URL to web api

  constructor(private http: HttpClient) {
  }

  addPoll(poll: Poll) {
    console.log(poll);
    this.http.post(this.pollsUrl, poll).subscribe((data: Poll) => console.log(data), error => console.log(error));
  }

  getPollById(id: number): Observable<any> {
    return this.http.get(this.pollsUrl + '/' + id);
  }
}
