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

  user:User = new User("","","", 0, "","","","","","","");

  constructor(private http:HttpClient, private messageService:MessageService, private router:Router) { }

  isLoggedIn(){
    return this.user.username != "" && this.user.uuid != "" && this.user.email != "";
  }

  isAdmin(){
    return (this.user.isAdmin == 1);
  }

  logoutUser(){
    this.user = new User("","","", 0, "","","","","","","");
    this.router.navigate(['/']).then();
  }

  loginUser(username:string, password:string):Observable<User>{
    return this.http.post<User>("http://localhost:3000/users/login", {
      username: username,
      password: password
    }) .pipe(
                tap(res => {
                  if(res.username !== undefined){
                   this.messageService.addMessage("loginUser(): successfull")
                   this.user = res;
                  //  this.user.username = res.username;
                  //  this.user.email = res.email;
                   sessionStorage.setItem("user", JSON.stringify(this.user));
                   if(this.isAdmin()){
                    this.router.navigate(["admin/authors"]);
                   }else{
                    this.router.navigate(["shop/products"]);
                   }
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
                    this.user = res;
                   //  this.user.username = res.username;
                  //  this.user.email = res.email;
                   sessionStorage.setItem("user", JSON.stringify(this.user));
                   this.router.navigate(["/dashboard"])
                }else{
                  this.messageService.addMessage("register(): wrong user")
                }
                }),
                  catchError(this.handleError<User>('registerUser'))
                )
  }

  updateUser(firstname:string, lastname:string, sex:string, address:string, postalcode:string, city:string, country:string){
    
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
