import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from './joke.model';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private apiUrl = 'https://christmascountdown.live/api/joke/';

  constructor(private http: HttpClient) {}

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.apiUrl);
  }
}
