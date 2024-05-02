import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Author } from "../../_model/author";
import { AuthorsService } from "../../_services/authors.service";
import {AuthorsComponent} from "../authors.component"
import { routes } from "../../app.routes";

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

  constructor(private authorService: AuthorsService, public authorComponent:AuthorsComponent) {
  }

  saveAuthor() {
    this.authorService.updateAuthor(this.author)
      .subscribe(_ => {
        this.authorComponent.authors.forEach(author => {
          if(author.uuid == this.author.uuid){
            author.firstname = this.author.firstname;
            author.lastname = this.author.lastname;
          }
        })
      }, error => {
        // handle error
      });
  }

  cancel() {
    this.author = new Author(0, "", "", "");
  }

  deleteAuthor() {
    this.authorService.deleteAuthor(this.author)
      .subscribe(_ => {
        this.authorComponent.authors = this.authorComponent.authors.filter(author => author.uuid != this.author.uuid)
      }, error => {
        // handle error
      });
  }

  newAuthor() {
    this.authorService.newAuthor(this.author)
      .subscribe(author => {
        this.author.uuid = author.uuid;
          this.authorComponent.authors.push(this.author)
      }, error => {
        // handle error
      });
  }

}
