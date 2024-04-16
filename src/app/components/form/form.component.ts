import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class MyFormComponent {

  firstName:string=""
  lastName:string=""
  email:string=""

  @ViewChild('myForm', { static: true }) form: NgForm;

  onSubmit() {
    console.log(`I got the values ${this.firstName} and ${this.lastName} with email id as ${this.email}`);
    
    if (this.form.valid) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form invalid');
    }
    
  }
}
