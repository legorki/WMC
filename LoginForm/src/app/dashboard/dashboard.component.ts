import { Component } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { AuthorsComponent } from '../authors/authors.component';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MessagesComponent, AuthorsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public userService:UsersService){}

}
