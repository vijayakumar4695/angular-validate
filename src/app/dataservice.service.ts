import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   check:any;

  constructor(private http:HttpClient) { }
  regData(value){
    return this.http.post('https://5c94af9a498269001487f0c2.mockapi.io/api/v1/check',value)
    .pipe(map(data=>this.check=data)) 
    }

    getData(){
      return this.http.get('https://5c94af9a498269001487f0c2.mockapi.io/api/v1/check')
      .pipe(map(data=>this.check=data))
    }
  }

