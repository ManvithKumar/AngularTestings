import { Component,Input } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.scss']
})
export class MultiformComponent {


faGear = faGear

@Input() data:any[] =[]
@Input() margin:number=10


 cols:number=44
 rows:number=6

ngOnInit()
{
  
}
optionsVisible = false;

toggleOptions() {
  this.optionsVisible = !this.optionsVisible;
}

}
