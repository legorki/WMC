import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MessagesComponent, AuthorsComponent, AuthorDetailComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookshop-client-v01';
}
