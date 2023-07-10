import { Component } from '@angular/core';
import { contactUs } from 'src/app/models/contactus';
import {ContactusService} from 'src/app/Services/contactus.service'
//importing FormBuilder and validators for reactive form
import { FormBuilder, Validators} from '@angular/forms';
//Importing ToasterService for popups
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  user!: contactUs;
  allUsers:contactUs[]=[];


  constructor(private fb: FormBuilder, 
    private  _Users:ContactusService,
    private toastr: ToastrService,){
  
  }

   //Reactive ADD User Form
 contactUsForm = this.fb.group({

  Email: ['', [Validators.required,Validators.email]],
})

 //Setters
 get Email() { return this.contactUsForm.get('Email'); }

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

}
