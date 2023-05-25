import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RedditResponse } from './post';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  private url = 'https://www.reddit.com/r/aww/.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<RedditResponse> {
    return this.http.get<RedditResponse>(this.url);
  }
}
