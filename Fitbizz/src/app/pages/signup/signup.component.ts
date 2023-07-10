import { Component , OnInit} from '@angular/core';
//importing Users model and Users service
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/Services/usersService';
//importing FormBuilder and validators for reactive form
import { FormBuilder, Validators} from '@angular/forms';
//Importing ToasterService for popups
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user!: Users;
  allUsers:Users[]=[];


constructor(private fb: FormBuilder, 
  private  _Users:UsersService,
  private toastr: ToastrService,
  private router: Router){

}

 //Reactive Sign UpForm
 signUpForm = this.fb.group({
  Name: ['', [Validators.required,Validators.minLength(6)]],
  Mobile: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
  Email: ['', [Validators.required,Validators.email]],
  Password: ['', [Validators.required,
     Validators.minLength(8),
     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
     ]],
})


 //Setters
 get Name() { return this.signUpForm.get('Name'); }
 get Mobile() { return this.signUpForm.get('Mobile'); }
 get Email() { return this.signUpForm.get('Email'); }
 get Password() { return this.signUpForm.get('Password'); }

   //Add User to database
   signUp() {
    console.log(this.signUpForm.value);
    this.user=this.signUpForm.value as Users;

    this._Users.AddUser(this.user).subscribe((res) => 
    {
      this.toastr.success('Signed up successfully.');
      this.signUpForm.reset();
      this.router.navigate(['pages/login'])
      
    }, err => {
      console.log("Failed to Sign Up",err);
    })
  }
  
  
  ngOnInit(): void {
  }


}