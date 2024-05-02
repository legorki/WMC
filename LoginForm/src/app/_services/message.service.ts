import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:string[] = []

  constructor() { }

  addMessage(message:string):Observable<string[]>{
    this.messages.push(message);
    return of(this.messages);
  }

  clearMessages():Observable<string[]>{

    this.messages = []
    return of(this.messages)
  }

}
