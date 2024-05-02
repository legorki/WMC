import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";
import {MessagesComponent} from "./messages/messages.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorsComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bookshop-AuthorDetail';
}
