import { Component } from '@angular/core';
import { MessageService } from "../_service/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {
  newMessage: string = '';
  constructor(public messageService: MessageService) {}

  clearMessage() {
    this.messageService.clear();
  }

  protected readonly document = document;
}
