import { Component, Input, inject,Output,EventEmitter } from '@angular/core';
import { PaginationService } from './pagination.service';

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
@Output() eventEmition = new EventEmitter<any[]>();

paginationService = inject(PaginationService);

ngOnInit()
{
  this.loadData() 
}
emitResultData()
{
  this.eventEmition.emit(this.resultData);
} 
loadData()
{
  this.paginationService.fetchData(this.currentPage,this.pageSize,this.data).subscribe((data)=>{
    this.resultData = data
    this.emitResultData()
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


}
