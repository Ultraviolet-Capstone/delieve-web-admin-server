import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { JwtHelper } from 'angular2-jwt';
import { SessionToken } from '../models/session-token';

@Injectable()
export class LoginSessionService {
  readonly userKey = 'currentUser';
 
  sessionToken() {
    const sessionToken = sessionStorage.getItem(this.userKey);
    if (!sessionToken) return undefined;
    else return sessionToken;
  }

  isLogined() {
    return this.check();
  }
  
  login(sessionToken: SessionToken) {
    this.clear();
    sessionStorage.setItem(this.userKey, JSON.stringify(sessionToken));
  }

  token() {
    if (this.check()) {
      return this.decode(this.sessionToken());
    } else {
      return undefined;
    }
  }

  private check() {
    return sessionStorage.getItem(this.userKey) !== null;
  }

  private get() {
    return sessionStorage.getItem(this.userKey);
  }

  public clear() {
    sessionStorage.clear();
  }

  private decode(jwtStr) {
    try {
      let jwtHelper: JwtHelper = new JwtHelper();
      return jwtHelper.decodeToken(jwtStr);
    } catch (err) {
      console.warn(err, `\nerror src -----\n${jwtStr}`);
    }
  }

}