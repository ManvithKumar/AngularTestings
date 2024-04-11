import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {

  cuurentmessage:string=""
  
  constructor(private message:MessageserviceService){}

  SendMessage(event:Event){
  const inputValue = (event.target as HTMLInputElement).value;
    this.message.writeOn(inputValue)
  }

ngOnInit(){
  this.message.MessageOb.subscribe((val)=>{
    this.cuurentmessage=val
  })
}

}
