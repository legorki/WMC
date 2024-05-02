import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, tap, catchError, of } from 'rxjs';
import { User } from '../_model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user:User = new User("","","", false, "","","","","","","");

  constructor(private http:HttpClient, private messageService:MessageService, private router:Router) { }

  loginUser(username:string, password:string):Observable<User>{
    return this.http.post<User>("http://localhost:3000/users/login", {
      username: username,
      password: password
    }) .pipe(
                tap(res => {
                  if(res.username !== undefined){
                   this.messageService.addMessage("loginUser(): successfull")
                   this.user.username = res.username;
                   this.user.email = res.email;
                   this.router.navigate(["/dashboard"])
                }else{
                  this.messageService.addMessage("loginUser(): wrong user")
                }
                }),
                  catchError(this.handleError<User>('loginUser'))
                )
  }

  registerUser(email:string,username:string, password:string):Observable<User>{
    return this.http.post<User>("http://localhost:3000/users/register", {
      email: email,
      username: username,
      password: password
    }).pipe(tap(res => {
       if(res.username !== undefined){
                   this.messageService.addMessage("registerUser(): successfull")
                   this.user.username = res.username;
                   this.user.email = res.email;
                   this.router.navigate(["/dashboard"])
                }else{
                  this.messageService.addMessage("register(): wrong user")
                }
                }),
                  catchError(this.handleError<User>('registerUser'))
                )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.addMessage(`${operation} failed: ${error.message}`);
      // this.messageService.addMessage("loginUser(): failed")

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
