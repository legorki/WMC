import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../_services/users.service';
import { RouterLink } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, MessagesComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email:string = "";
  username:string = "";
  password:string = "";


  constructor(private userService:UsersService) {}

  submitted = false;
  onSubmit() {
    this.userService.registerUser(this.email,this.username, this.password).subscribe()

    // this.submitted = true;
  }
}
