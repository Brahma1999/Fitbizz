import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { Users } from '../models/users';
import {BASE_URL} from './URL';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  //To get login status from Login Component
  private booleanStatus = new BehaviorSubject<boolean>(false);
  public data$ = this.booleanStatus.asObservable();

  mystatus:boolean=false;

  private _url: string = BASE_URL+'users/';

  constructor(private http:HttpClient) { }

  //Get all users data
  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this._url);
  }

    //Add new User
    AddUser(user:Users):Observable<Users> {
      return this.http.post<Users>(this._url,user);
    }  

    //update status
    updateBoolean(value: boolean): void {
      this.booleanStatus.next(value);
      this.mystatus=value;
      console.log(value);
    }
  

    //CanActivate Authentication function
    isAuthenticated(){
      if(this.mystatus==true){
        return true;
      }
      else{
        return false;
      }
    }

   
}
