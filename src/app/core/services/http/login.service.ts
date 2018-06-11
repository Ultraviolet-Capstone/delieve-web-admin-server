import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from './http.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class LoginService {
  readonly appUrl = '/dv/auth/admin/token';

  constructor(private http: Http,
              private httpService: HttpService) {
  }

  public login(adminName: string, password: string) {
    return this.http.get(`${this.appUrl}?userName=${adminName}&password=${password}&grantType=${this.httpService.grantType}`)
      .map(this.httpService.extractData)
      .catch(this.httpService.handleError);
  }

  public receiverLogin(receiverPhoneNumber: string, matchingId: number) {
    const url = `/dv/auth/receiver/token?phoneNumber=${receiverPhoneNumber}&matchingId=${matchingId}`;
    return this.http.get(url)
      .map(this.httpService.extractData)
      .catch(this.httpService.handleError);
  }

}