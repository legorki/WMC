import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, catchError, tap, of } from 'rxjs';
import { Author } from '../_model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient, private messageService:MessageService) { }

  getAuthors():Observable<Author[]>{
    return this.http.get<Author[]>("http://localhost:3000/authors")
              .pipe(
                tap(_ => this.messageService.addMessage("getAuthors(): Successful")),
                catchError(this.handleError<Author[]>('getAuthors', [])))
  }

  deleteAuthor(uuid:string):Observable<Author[]>{
    return this.http.delete<Author[]>("http://localhost:3000/authors/" + uuid)
              .pipe(
                tap(_ => this.messageService.addMessage("deleteAuthor(): Successful")),
                catchError(this.handleError<Author[]>('deleteAuthor', [])))
  }

  createAuthor(uuid:string, firstname:string, lastname:string):Observable<Author>{
    return this.http.post<Author>("http://localhost:3000/authors", {
      firstname: firstname,
      lastname: lastname
    })
              .pipe(
                tap(_ => this.messageService.addMessage("createAuthor(): Successful")),
                catchError(this.handleError<Author>('createAuthor')))
  }

  updateAuthor(uuid:string, firstname:string, lastname:string):Observable<Author[]>{
    return this.http.put<Author[]>("http://localhost:3000/authors/" + uuid, {
       firstname: firstname,
      lastname: lastname
    })
              .pipe(
                tap(_ => this.messageService.addMessage("updateAuthor(): Successful")),
                catchError(this.handleError<Author[]>('updateAuthor', [])))
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    console.log(`${operation} failed: ${error.message}`);
    this.messageService.addMessage("getAuthors(): failed")

    return of(result as T);
  };
}
}
