import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Author} from "../../_model/author";
import {AuthorsService} from "../../_services/authors.service";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [
    FormsModule,

  ],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {

  @Input() author = new Author(0, "", "", "")

  constructor(private authorService:AuthorsService) {
  }

  saveAuthor(){
    this.authorService.updateAuthor(this.author);
  }

  cancel(){
    this.author = new Author(0, "", "", "");
  }

  deleteAuthor(){
    this.authorService.deleteAuthor(this.author);
  }

  newAuthor(){
    this.authorService.newAuthor(this.author)
  }

}
