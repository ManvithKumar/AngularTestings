import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  private message = new BehaviorSubject<any>("");
  MessageOb = this.message.asObservable();

  constructor() { }

  writeOn(data:string){
    this.message.next(data)
  }

  
}
