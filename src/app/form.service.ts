import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  dummyurl='../assets/form.json';
 
  constructor(private http:HttpClient) { }
  getdata(client_id):Observable<any>{
   return this.http.get(this.dummyurl);
  }
  postdata(client_id,data){
    
  }
}
