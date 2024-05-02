import { Component } from '@angular/core';
import { MessageService } from '../_services/message.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  messages:string[] = [];

  constructor(public messageService:MessageService){}

  addMessage(message:string):void{
    this.messageService.addMessage(message).subscribe(messages => this.messages = messages)
  }

  clearMessages(){
    this.messageService.clearMessages().subscribe(messages => this.messages = messages);
  }

}
