import {Component, OnInit} from '@angular/core';
import { Author, AuthorService } from "../_service/author.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Author[] | undefined;
  authorDetailForm!: FormGroup;

  constructor(private authorsService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorsService.getAuthors()
      .subscribe(authors => this.authors = authors);
  }

  onAuthorChanged(newAuthor: Author): void {
    this.getAuthors()
  }
}

