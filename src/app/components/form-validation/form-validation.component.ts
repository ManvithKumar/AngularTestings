import { Component,ViewChild } from '@angular/core';
import { FormGroup,FormControl,FormArray, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent {

  constructor(private modalService:NgbModal){}

  @ViewChild('addpopup') popup:any;

  userForm = new FormGroup({
    users: new FormArray([
      this.createFormGroup()
    ])
  });

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]')]),
      phoneNumber: new FormControl('',[Validators.required,Validators.max(10),Validators.pattern('[0-9]')])
    });
}

openPop(){
  this.modalService.open(this.popup,{centered:true})
}
closePop()
{
  this.modalService.dismissAll()
}

addUser() {
 if(this.userForm.valid)
 {
  const usersArray = this.userForm.get('users') as FormArray;
  usersArray.push(this.createFormGroup());
 }
 else{
  console.log(this.userForm);
  
 }
}

}

