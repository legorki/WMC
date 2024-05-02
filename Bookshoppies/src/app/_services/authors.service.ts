import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {catchError, Observable, of, tap} from "rxjs";
import {Author} from "../_model/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient, private msgService:MessageService) {
  }

  getAuthors():Observable<Author[]>{
    return this.http.get<Author[]>("http://localhost:3000/authors")
      .pipe(
        tap(_ => this.msgService.addMessage("getAuthors(): successful")),
        catchError(this.handleError<Author[]>('getAuthors',[])))
  }

  deleteAuthor(author:Author){
    this.http.delete("http://localhost:3000/authors/" + author.uuid)
      .subscribe(_ => this.msgService.addMessage("deleteAuthor(): successful"));
  }

  updateAuthor(author:Author){
    this.http.put("http://localhost:3000/authors/" + author.uuid, {
      firstname: author.firstname,
      lastname: author.lastname
    }).subscribe(_ => this.msgService.addMessage("updateAuthor(): successful"))
  }

  newAuthor(author:Author){
    this.http.post("http://localhost:3000/authors", {
      firstname: author.firstname,
      lastname: author.lastname
    }).subscribe(_ => this.msgService.addMessage("newAuthor(): successful"))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.msgService.addMessage("getAuthors(): failed")
      return of(result as T);
    };
  }
}
