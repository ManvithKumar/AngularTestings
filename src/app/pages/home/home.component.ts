import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'
import { users } from 'src/app/data/users.js'
import { PaginationService } from 'src/app/components/pagination/pagination.service';
import { Observable,of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private router = inject(Router);
  private paginationService = inject(PaginationService)
  userData:any[]=[]
  currentPage = 0;
  pageSize = 5;

  obj$ = new Observable<string>;
  
  ngOnInit()
  {
    // this.loadData() 
    this.obj$ = of("Manvith")
  }
  // loadData()
  // {
  //   this.paginationService.fetchData(this.currentPage,this.pageSize,users).subscribe((data)=>{
  //     this.userData = data
  //     console.log(this.userData);
      
  //   })
  // }



  navigateToAbout()
  {
    this.router.navigate(['/about'],{queryParams:{id:990,name:'Manvith'}})
  }


}
