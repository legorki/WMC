import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { MessageService} from "./message.service";
import {catchError, Observable, of, tap} from "rxjs";


export interface Author {
  id: number;
  uuid: string;
  firstname: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = "http://localhost:3000/authors";
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAuthors(): Observable<Author[]>  {
    return this.http.get<Author[]>(this.apiUrl).pipe(
      tap(_ => this.log('fetched authors')),
      catchError(this.handleError<Author[]>('getAuthors', []))
    );
  }

  deleteAuthor(authorId: string): Observable<void> {
    const url = `${this.apiUrl}/${authorId}`;
    return this.http.delete<void>(this.apiUrl).pipe(
      tap(_ => this.log(`deleted author with id=${authorId}`)),
      catchError(this.handleError<void>('deleteAuthor'))
    );
  }

  updateAuthor(author: Author): Observable<void> {
    const url = `${this.apiUrl}/${author.uuid}`;
    return this.http.put<void>(this.apiUrl, author).pipe(
      tap(_ => this.log(`updated author with id=${author.uuid}`)),
      catchError(this.handleError<void>('updateAuthor'))
    )
  }

  addNewAuthor(author: Author): Observable<Author> {
    const url = `${this.apiUrl}`;
    return this.http.post<Author>(this.apiUrl, author).pipe(
      tap(_ => this.log(`added new author with id=${author.uuid}`)),
      catchError(this.handleError<Author>('addNewAuthor'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`AuthorsService: ${message}`);
  }
}
