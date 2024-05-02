import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MessageService } from "./message.service";
import { catchError, tap } from "rxjs/operators";
import {Observable, of} from "rxjs";
import { Author } from "../_model/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient, private msgService: MessageService) {
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>("http://localhost:3000/authors")
      .pipe(
        tap(_ => this.msgService.addMessage("getAuthors(): successful")),
        catchError(this.handleError<Author[]>('getAuthors', []))
      );
  }

  deleteAuthor(author: Author): Observable<any> {
    return this.http.delete("http://localhost:3000/authors/" + author.uuid)
      .pipe(
        tap(_ => this.msgService.addMessage("deleteAuthor(): successful")),
        catchError(this.handleError<any>('deleteAuthor'))
      );
  }

  updateAuthor(author: Author): Observable<any> {
    return this.http.put("http://localhost:3000/authors/" + author.uuid, {
      firstname: author.firstname,
      lastname: author.lastname
    }).pipe(
      tap(_ => this.msgService.addMessage("updateAuthor(): successful")),
      catchError(this.handleError<any>('updateAuthor'))
    );
  }

  newAuthor(author: Author): Observable<any> {
    return this.http.post("http://localhost:3000/authors", {
      firstname: author.firstname,
      lastname: author.lastname
    }).pipe(
      tap(_ => this.msgService.addMessage("newAuthor(): successful")),
      catchError(this.handleError<any>('newAuthor'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.msgService.addMessage(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
