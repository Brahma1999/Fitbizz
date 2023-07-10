import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weightgain } from '../models/weightgain';
import {BASE_URL} from './URL';


@Injectable({
  providedIn: 'root'
})
export class WeightgainService {

  private _url: string = BASE_URL+'weightgain/'

  constructor(private http:HttpClient) { }

  getWeightGain():Observable<Weightgain[]>{
    return this.http.get<Weightgain[]>(this._url);
  }
}
