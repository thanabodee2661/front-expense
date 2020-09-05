import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggetedIn = false;
  private key = 'token';

  constructor() { }

  public setLoggetedIn(statusLogin, token) {
    this.isLoggetedIn = statusLogin;
    if (statusLogin) {
      window.localStorage.setItem(this.key, token);
    } else {
      window.localStorage.removeItem(this.key);
    }
  }

  public getLoggetedIn() {
    return this.isLoggetedIn;
  }

  public checkTokenAuth() {
    const token = this.getToken();
    if (token) {
      this.isLoggetedIn = true;
    } else {
      this.isLoggetedIn = false;
    }

    return this.getLoggetedIn();
  }

  public getToken() {
    return window.localStorage.getItem(this.key);
  }
}
