import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

currentmeesage:string=""

constructor(private message:MessageserviceService){}

ngOnInit(){
  this.message.MessageOb.subscribe((val)=>{
    this.currentmeesage = val
    console.log(val)
  })
}

SendMessageToChild2(event:Event){
  const inputValue = (event.target as HTMLInputElement).value;
  this.message.writeOn(inputValue)
}

}
