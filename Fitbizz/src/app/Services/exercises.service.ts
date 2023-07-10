import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercises } from '../models/exercises';
import {BASE_URL} from './URL';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  
 private _url: string = BASE_URL+'exercises/';
 

  constructor(private http:HttpClient) { }

  getExercise():Observable<Exercises[]>{
    return this.http.get<Exercises[]>(this._url);
  }
  
}  
