import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipes } from '../models/recipes';
import {BASE_URL} from './URL';



@Injectable({
  providedIn: 'root'
})
export class HealthyrecipesService {

  private _url: string = BASE_URL+'recipes/';

  constructor(private http:HttpClient) { }

  getRecipes():Observable<Recipes[]>{
    return this.http.get<Recipes[]>(this._url);
  }
}
