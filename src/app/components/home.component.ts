import { Component, OnDestroy } from '@angular/core';
import { ChangeText } from '../directive/change-text';
import { NgModel } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private http: HttpClient,private activatedRoute:ActivatedRoute) {}

  InputText: string = '';
  private searchSubject = new Subject<string>();
  title: string = 'My Name is manvith gatty';
  result:any
  private readonly debounceTimeMs = 300;

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(this.debounceTimeMs))
      .subscribe((searchValue) => {
        this.performSearch(searchValue);
      });

    console.log("Url",this.activatedRoute.url);
  }

  onSearch() {
    this.searchSubject.next(this.InputText);
  }

  performSearch(value: string) {
    console.log('Search Item :', value);
  }

  ngOnDestroy() {
    this.searchSubject.complete();
  }

  checkValid() {
    this.http.get('http://localhost:9000/auth').subscribe((res)=>{
        console.log(res)
        
    })
  }
}
