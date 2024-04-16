import { Component, inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private activatedRouter = inject(ActivatedRoute);

  ngOnInit()
  {
    this.activatedRouter.queryParams.subscribe((data)=>{
      console.log(data['id']);
      
    })
  }

}
