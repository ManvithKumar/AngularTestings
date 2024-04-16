import { Component } from '@angular/core';
import { ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss']
})
export class KanbanboardComponent {

  tasks = [
    {
      "taskId": 1,
      "taskName": "Task 1",
      "status": "To Do"
    },
    {
      "taskId": 2,
      "taskName": "Task 2",
      "status": "To Do"
    },
    {
      "taskId": 3,
      "taskName": "Task 3",
      "status": "In Progress"
    },
    {
      "taskId": 4,
      "taskName": "Task 4",
      "status": "In Progress"
    },
    {
      "taskId": 5,
      "taskName": "Task 5",
      "status": "Done"
    },
    {
      "taskId": 6,
      "taskName": "Task 6",
      "status": "Done"
    },
    {
      "taskId": 7,
      "taskName": "Task 7",
      "status": "To Do"
    },
    {
      "taskId": 8,
      "taskName": "Task 8",
      "status": "To Do"
    },
    {
      "taskId": 9,
      "taskName": "Task 9",
      "status": "In Progress"
    },
    {
      "taskId": 10,
      "taskName": "Task 10",
      "status": "In Progress"
    },
    {
      "taskId": 11,
      "taskName": "Task 11",
      "status": "Done"
    },
    {
      "taskId": 12,
      "taskName": "Task 12",
      "status": "Done"
    },
    {
      "taskId": 13,
      "taskName": "Task 13",
      "status": "To Do"
    },
    {
      "taskId": 14,
      "taskName": "Task 14",
      "status": "To Do"
    },
    {
      "taskId": 15,
      "taskName": "Task 15",
      "status": "In Progress"
    }
  ]

  currentElement:any;
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}


  getTasks(status:string)
  {
    return this.tasks.filter((task)=> task.status === status )
  }

  dragOnStart(event:Event,item:any)
  {
    this.el.nativeElement = event.target;
    this.renderer.addClass(this.el.nativeElement,'dragged')  
    this.currentElement = item
    }

  dropOver(event:any,status:string)
  {
    event.preventDefault()
    let filteredTask = this.tasks.find((task)=> task.taskId === this.currentElement.taskId)
    console.log(filteredTask);
    
    if(filteredTask != undefined)
      {
        filteredTask.status = status
      }
    this.currentElement = null
  }

  OnDragOver(event:any)
  {
    event.preventDefault()
  }
}
