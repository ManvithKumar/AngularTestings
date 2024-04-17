import { Component, Input, inject,Output,EventEmitter } from '@angular/core';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

@Input() currentPage = 0;
@Input() pageSize = 0;
@Input() data: any[] = [];
resultData:any[]
maxIndex:number
@Output() eventEmition = new EventEmitter<any[]>();

ngOnInit()
{
  this.loadData() 
  this.maxIndex = Math.round(this.data.length/this.pageSize)

}
emitResultData()
{
  this.eventEmition.emit(this.resultData);
} 
loadData()
{
  this.fetchData(this.currentPage,this.pageSize,this.data).subscribe((data)=>{
    this.resultData = data
    this.emitResultData()
  })
}

fetchData(page: number, pageSize: number,data:any[]): Observable<string[]> {
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const pageData = data.slice(startIndex, endIndex);
  return of(pageData);
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


}
