import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactUs } from '../models/contactus';
import { Observable } from 'rxjs';

import {BASE_URL} from './URL';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private _url: string = BASE_URL+'contactUs/';

  constructor(private http:HttpClient) 
  { }


    //Add user Message
    AddUser(user:contactUs):Observable<contactUs> {
      return this.http.post<contactUs>(this._url,user);
    }  

}
