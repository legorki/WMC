import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message: string[] = [];

  add(message: string) {
    this.message.push(message);
  }

  clear() {
    this.message = [];
  }

  getMessages() {
    return this.message;
  }

  constructor() { }
}
