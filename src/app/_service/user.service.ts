import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getPublicContent (): Observable <any>{
    return this.http.get(API_URL + 'all', {responseType : 'text'});
    
  }

  getUserBoard (){
    return this.http.get(API_URL + 'user', {responseType : 'text'});
  }

  getAdminBoard (){
    return this.http.get(API_URL + 'admin', {responseType : 'text'});
  }

  getBodegaBoard (){
    return this.http.get(API_URL + 'bodega', {responseType : 'text'});
  }
}
