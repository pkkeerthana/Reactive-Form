import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  dummyurl='../assets/form.json';
  getDataUrl = 'http://192.168.0.171:9010/get_attribute?client_id=';
  postDataUrl = 'http://192.168.0.171:9010/post_attribute?client_id=';
  constructor(private http:HttpClient) { }
  getdata(client_id):Observable<any>{
   // return this.http.get(this.getDataUrl+client_id);
   return this.http.get(this.dummyurl);
  }
  postdata(client_id,data):Observable<any>{
    let headers={
      'Content-type':'Application/JSON'
    }
    return this.http.post(this.postDataUrl+client_id,data,{headers});
  }
}
