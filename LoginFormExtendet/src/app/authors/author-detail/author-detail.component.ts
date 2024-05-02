import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Author } from '../../_model/author';
import { AuthorsService } from '../../_services/authors.service';
import { AuthorsComponent } from '../authors.component';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {

  @Input() author:Author = new Author(0, "", "", "");

  btnStatus:boolean = false;

  constructor(private authorService:AuthorsService, public authorsComponent:AuthorsComponent){}

  checkSaveBtn(){
    console.log("Test")
    if (this.author.firstname != "" && this.author.lastname != ""){
      this.btnStatus = true;
    }else{
      this.btnStatus = false;
    }
  }

  saveAuthor(){
    this.authorService.updateAuthor(this.author.uuid, this.author.firstname, this.author.lastname) .subscribe(_ => 
    {
      this.authorsComponent.getAuthors(),
      this.clearAuthor()
    })
  }

  createAuthor(){
    this.authorService.createAuthor(this.author.uuid, this.author.firstname, this.author.lastname)
    .subscribe(res => 
    {
      this.author.uuid = res.uuid;
      this.authorsComponent.authors.push(this.author)
      this.clearAuthor()
    })
  }

  deleteAuthor(){
    this.authorService.deleteAuthor(this.author.uuid).subscribe(_ => {
      this.authorsComponent.authors = this.authorsComponent.authors.filter(a => a.uuid !== this.author.uuid);
      this.clearAuthor()
    })
  }

  updateAuthor(){
    this.authorService.updateAuthor(this.author.uuid, this.author.firstname, this.author.lastname).subscribe(_ => {
      for(var i:number = 0; i < this.authorsComponent.authors.length; i++){
        if(this.authorsComponent.authors[i].uuid == this.author.uuid){
          this.authorsComponent.authors[i] = this.author;
          break;
        }
      }
      this.clearAuthor()
    })
  }

  clearAuthor(){
    this.author=new Author(0,"","", "")
  }

}
