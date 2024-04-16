import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private router = inject(Router);

  navigateToAbout()
  {
    this.router.navigate(['/about'],{queryParams:{id:990,name:'Manvith'}})
  }

}
