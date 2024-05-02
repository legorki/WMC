import { Component, Output } from '@angular/core';
import { Author } from '../../_model/author';
import { AuthorsService } from '../../_services/authors.service';
import { NgFor } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor, AuthorDetailComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {

  @Output() onSelect:EventEmitter<any> = new EventEmitter();
  
  authors:Author[] = [];
  selected:Author = new Author(0,"","","");
  
  lines:any[] = [];

  constructor(private authorService:AuthorsService){}

  getAuthors(){
    this.authors = []
    this.authorService.getAuthors().subscribe(authors => this.authors = authors)
  }

  setValues(uuid:string, firstname:string, lastname:string):void{
    this.selected = new Author(0, uuid, firstname, lastname)
    console.log(this.selected.uuid)
  }

  ngOnInit(): void {
    this.getAuthors();
  }

}
