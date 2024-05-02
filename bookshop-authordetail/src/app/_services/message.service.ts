import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  stringArray:string[] = [];

  addMessage(msg:string){
    this.stringArray.push(msg);
  }
  clearMessage(){
    this.stringArray = []
  }

}


