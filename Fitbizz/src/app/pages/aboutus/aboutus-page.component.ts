import { Component } from '@angular/core';
//importing Users model and Users service
import { contactUs } from 'src/app/models/contactus';
import {ContactusService} from 'src/app/Services/contactus.service'

import { UsersService } from 'src/app/Services/usersService';
//importing FormBuilder and validators for reactive form
import { FormBuilder, Validators} from '@angular/forms';
//Importing ToasterService for popups
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-aboutus-page',
  templateUrl: './aboutus-page.component.html',
  styleUrls: ['./aboutus-page.component.css']
})
export class AboutusPageComponent {

  user!: contactUs;
  allUsers:contactUs[]=[];


  constructor(private fb: FormBuilder, 
    private  _Users:ContactusService,
    private toastr: ToastrService,){
  
  }

   //Reactive ADD User Form
 contactUsForm = this.fb.group({
  Name: ['', [Validators.required,Validators.minLength(6)]],
  Mobile: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
  Email: ['', [Validators.required,Validators.email]],
  Message: ['',],
})

 //Setters
 get Name() { return this.contactUsForm.get('Name'); }
 get Mobile() { return this.contactUsForm.get('Mobile'); }
 get Email() { return this.contactUsForm.get('Email'); }
 get Message(){ return this.contactUsForm.get('Message'); }
 
//Add User to database
addUser() {
  console.log(this.contactUsForm.value);
  this.user=this.contactUsForm.value as contactUs;

  this._Users.AddUser(this.user).subscribe((res) => 
  {
    this.toastr.success('Message sent successfully.');
    this.contactUsForm.reset();
    
  }, err => {
    console.log("Failed to Contact Us",err);
  })
}


ngOnInit(): void {
}



}
