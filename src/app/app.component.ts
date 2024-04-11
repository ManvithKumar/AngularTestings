import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  alltodos: any;
  showSpinner = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.showSpinner = true;

    // Combine multiple observables using forkJoin
    const obs1 = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    const obs2 = this.http.get('https://jsonplaceholder.typicode.com/todos/2');
    
    combineLatest([obs1, obs2]).subscribe(
      (res) => {
        const [user1,user2] = res
        console.log("This is user 1 :",user1);
        console.log("This is user 2 :",user2);
        this.alltodos = res; 
        this.showSpinner = false
      },
      (error) => {
        console.error(error)
        this.showSpinner = false; 
      }
    );
  }
}
