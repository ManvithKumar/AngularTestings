import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'
import { users } from 'src/app/data/users.js'
import { PaginationService } from 'src/app/components/pagination/pagination.service';

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

  ngOnInit()
  {
    this.loadData() 
  }
  loadData()
  {
    this.paginationService.fetchData(this.currentPage,this.pageSize,users).subscribe((data)=>{
      this.userData = data
      console.log(this.userData);
      
    })
  }

  nextPage()
  {
    this.currentPage++;
    this.loadData()
  }

  prevPage()
  {
    this.currentPage--;
    this.loadData()
  }



  navigateToAbout()
  {
    this.router.navigate(['/about'],{queryParams:{id:990,name:'Manvith'}})
  }


}
