import { Injectable } from '@angular/core';
import {
    Headers,
    Http,
    RequestOptionsArgs,
    Response,
    ResponseContentType,
    URLSearchParams,
    RequestOptions
} from '@angular/http';

import swal from 'sweetalert2';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoginSessionService, RouteService } from '../../services';

@Injectable()
export class HttpService {
  private readonly GRANT_TYPE = 'password';
  private authKey: string = '';

  constructor(private loginSessionService: LoginSessionService,
              private routeService: RouteService) {
    this.routeService.parseToken()
    .subscribe(params => {
      const token = params['token'];
      if (token) {
        this.authKey = this.loginSessionService.token();
      }
    })
  }

  public extractData(res: Response): any {
    try {
      return res.json();
    } catch (err) {
      console.warn(err, `\nerror src -----\n${res.text()}`);
    }
    return [];
  }

  get grantType() {
    return `${this.GRANT_TYPE}`;
  }

  public generateAuthOptions() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('cp', this.authKey);
    return new RequestOptions({headers: headers});
  }

  public handleError(error: any) {
    let errorBody: any = error['_body'];
    try {
      errorBody = JSON.parse(error['_body']);
    } catch (err) {
    }
    swal({
      title: '에러',
      text: errorBody.message,
      type: 'error',
    });
    console.error('API ERROR', error, errorBody);
    return Observable.throw(error.message || error);
  }

  public obj2QueryStr(obj) {
    let params = new URLSearchParams();
    for(let key in obj){
        params.set(key, obj[key]) 
    }
    return params;
  }
}