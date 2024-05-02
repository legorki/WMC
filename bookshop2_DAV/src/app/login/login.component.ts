import { Component } from '@angular/core';
import { User } from '../_model/user';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../_services/users.service';
import { RouterLink } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, MessagesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  username:string = "";
  password:string = "";


  constructor(private userService:UsersService) {}

  submitted = false;
  onSubmit() {
    this.userService.loginUser(this.username, this.password).subscribe()

  }

}
