import { Component ,OnInit } from '@angular/core';
import { UsersService } from '../Services/usersService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isMenuCollapsed = true;

 // menuType:boolean=false;

  constructor( private _users:UsersService , private router:Router) {
    
   }

   logout(){
    this.router.navigate(['']);
   }
  ngOnInit() {
  }
}
