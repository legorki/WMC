import { Component } from '@angular/core';
import {MessageService} from "../_services/message.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public msgService:MessageService) {}
}
