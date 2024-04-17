import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'
import { users } from 'src/app/data/users.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private router = inject(Router);
  userData:any[]=[]
  currentPage = 0;
  pageSize = 5;

  ngOnInit()
  {
    // this.loadData() 
  }
  // loadData()
  // {
  //   this.paginationService.fetchData(this.currentPage,this.pageSize,users).subscribe((data)=>{
  //     this.userData = data
  //     console.log(this.userData);
      
  //   })
  // }

  //The greeting funciton will appear below soon:



  navigateToAbout()
  {
    this.router.navigate(['/about'],{queryParams:{id:990,name:'Manvith'}})
  }



}
