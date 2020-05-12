import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../modules/topic/models/topic';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TopicService {

  private topicsUrl = '/api/topics';  // URL to web api

  constructor(private http: HttpClient) {
  }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.topicsUrl, topic);
  }

  getSharedTopics(): Observable<any> {
    return this.http.get(this.topicsUrl + '/all/shared');
  }
}
