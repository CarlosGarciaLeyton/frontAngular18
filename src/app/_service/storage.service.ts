import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
 /*MODO EDUCATIVO*/

  /* funcion que limpia el storage del usuario*/
  clean(): void {
    window.sessionStorage.clear();
  }

  /* funcion que guarda al usuario en el session storage*/
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  /* funcion que obtiene usuario de esession storage*/
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  /* funcion que valida si el usuario esta logeado*/
  public isLoggedIn(): boolean { //V O F
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;

  }
}
