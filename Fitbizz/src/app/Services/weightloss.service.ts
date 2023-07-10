import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weightloss } from '../models/weightloss';
import {BASE_URL} from './URL';

@Injectable({
  providedIn: 'root'
})
export class WeightlossService {

  private _url: string = BASE_URL+'weightloss/';

  constructor(private http:HttpClient) { }

  getWeightLoss():Observable<Weightloss[]>{
    return this.http.get<Weightloss[]>(this._url);
  }

}
