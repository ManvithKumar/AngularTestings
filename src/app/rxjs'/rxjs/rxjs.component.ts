import { Component } from '@angular/core';
import { fromEvent, interval,from, map } from 'rxjs';
import { ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {


  @ViewChild('display') display!:ElementRef;

  ngOnInit()
  {
    // const source = interval(1000);
    // const subscribe = source.subscribe(val => console.log(val));
    // setTimeout(()=>{
    //   subscribe.unsubscribe()
    // },5000)
    // const Obs = from([1,2,3,4,5,5])
    // const newObs = Obs.pipe(map((val)=> { return val*5 }))
    // newObs.subscribe((res)=>{
    //   console.log(res);
      
    // })
    
  }

  disableDisplay(){
    const Obs = fromEvent(this.display?.nativeElement,'click');
    Obs.subscribe((data)=>{
      console.log(data);
    })
  }
}
