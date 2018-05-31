import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from './http.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class EvaluateService {
  readonly appUrl = '/dv/api/evaluate/deliver';

  constructor(private http: Http,
              private httpService: HttpService) {
  }


  public getEvaluateInfo() {
    return this.http.get(`${this.appUrl}`)
      .map(this.httpService.extractData)
      .catch(this.httpService.handleError);
  }

  public getEvaluateTotalCnt() {
    return this.http.get(`${this.appUrl}/total`)
      .map(this.httpService.extractData)
      .catch(this.httpService.handleError);
  }

  public getEvaluateIdCard(userId: number) {
    return this.http.get(`${this.appUrl}/idcard?userId=${userId}`)
      .map(this.httpService.extractData)
      .catch(this.httpService.handleError);
  }

  public getEvaluateSelfi(userId: number) {
    return this.http.get(`${this.appUrl}/selfi?userId=${userId}`)
      .map(this.httpService.extractData)
      .catch(this.httpService.handleError);
  }

  public updateStatus(userId: number, status: string) {
    const obj = {userId: userId, status: status};
    return this.http.post(`${this.appUrl}/status`, obj)
      .map(this.httpService.extractData)
      .catch(this.httpService.handleError);
  }

}