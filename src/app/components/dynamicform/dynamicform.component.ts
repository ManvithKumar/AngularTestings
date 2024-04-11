import { Component,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.scss']
})
export class DynamicformComponent {

@ViewChild('content') addModal:any


constructor(private modalService:NgbModal){}

labelName:string="";
feildType:string=""
myFormList:any[] = [];
formName:string="FormName"
formDesc:string=""
margin:number =10
editForm:boolean=false

feildTypes: any[] = [
  {id: 0, type: ''}, 
  {id: 1, type: "text"},
  {id: 2, type: "number"},
  {id: 3, type: "date"},
  {id: 4, type: "file"},
  {id: 5, type: "textarea"},
 ];

openModal(){
  this.modalService.open(this.addModal,{centered:true});
}
closeModal(){
  this.modalService.dismissAll()
}

onSelectChange(option:any)
{
  this.feildType = option.target.value;
}

selectMargin(value:any)
{
  this.margin = value.target.value;
}

createFeild()
{
  const formData = {
  label:this.labelName,
  feildType:this.feildType,
  }
  this.myFormList.push(formData);
  this.labelName =""
  this.feildType=""
}

startEditing()
{
  this.editForm = true
}
saveChanges()
{
  this.editForm = false
}
  
}
