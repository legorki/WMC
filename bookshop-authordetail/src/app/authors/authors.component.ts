import { Component } from '@angular/core';
import {AuthorsService} from "../_services/authors.service";
import {MessageService} from "../_services/message.service";
import {NgForOf} from "@angular/common";
import {Author} from "../_model/author";
import {AuthorDetailComponent} from "./author-detail/author-detail.component";
import {MessagesComponent} from "../messages/messages.component";

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [
    NgForOf,
    AuthorDetailComponent,
    MessagesComponent
  ],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {


  constructor(private authorsService:AuthorsService) {
  }

  selectedAuthor:Author = new Author(0, "", "", "");
  authors:Author[] = [];
  getAuthors(){
    this.authors = []
    this.authorsService.getAuthors().subscribe(authors => this.authors = authors)
  }

  authorClickEvent(author:Author){
    this.selectedAuthor = author;
  }
  ngOnInit(): void {
    this.getAuthors();
  }
}
