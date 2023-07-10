import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foods } from '../models/foods';
import {BASE_URL} from './URL';


@Injectable({
  providedIn: 'root'
})

export class FoodItemsService {

  private _url: string = BASE_URL+'foodItems/';

  constructor(private http:HttpClient) { }

 //get All food items data
 getFoods(): Observable<Foods[]> {
  return this.http.get<Foods[]>(this._url);
}

  //Create Food Data
  createFoodItem(food:Foods):Observable<Foods> {
    return this.http.post<Foods>(this._url,food);
  } 

  
// //delete food item by id
deleteFoodById(food:Foods): Observable<Foods> {
  return this.http.delete<Foods>(this._url + food._id);
}

}

  // //update Food data
  // updateFoodItem(food:Foods):Observable<Foods> {
  //   return this.http.patch<Foods>(this._url+'/'+food.id,food);
  // }



