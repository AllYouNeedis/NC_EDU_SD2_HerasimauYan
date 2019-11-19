import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topic} from '../modules/topic/models/topic';

@Injectable({providedIn: 'root'})
export class TopicService {

  private topicsUrl = '/api/topics';  // URL to web api

  constructor(private http: HttpClient) {
  }

  addTopic(topic: Topic) {
    this.http.post(this.topicsUrl, topic).subscribe((data: Topic) => console.log(data), error => console.log(error));
  }
}