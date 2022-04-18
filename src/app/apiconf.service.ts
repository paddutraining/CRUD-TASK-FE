import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { taskmodel } from './models/task';
import { tasklistmodel } from './models/taskListModel';

@Injectable({
  providedIn: 'root'
})
export class ApiconfService {
API_BASE_URL='http://localhost:3000';
constructor(private http: HttpClient) { }

get(url:string):any{
return this.http.get<any[]>(`${this.API_BASE_URL}/${url}`);
}
post(url:string,data:object){
  return this.http.post(`${this.API_BASE_URL}/${url}`,data);
  }
  put(url:string,data:object){
    return this.http.put(`${this.API_BASE_URL}/${url}`,data);
    }
    patch(url:string,data:object){
      return this.http.patch<taskmodel>(`${this.API_BASE_URL}/${url}`,data);
      }
    delete(url:string){
      return this.http.delete(`${this.API_BASE_URL}/${url}`);
      }

}
