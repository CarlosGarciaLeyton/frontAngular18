import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://huachitos.cl/api/animales/comuna/127'
//const API_URL = 'http://localhost:8080/api/v1/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /*getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });

  }*/
  getPublicContent() : Observable<any>{
    return this.http.get(API_URL);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getBodegaBoard(): Observable<any> {
    return this.http.get(API_URL + 'bodega', { responseType: 'text' });
  }
}
