import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  
  public sideViewIndexToStr(index: number) {
    if (index === 0) {
      return '홈'
    } else if (index === 1) {
      return '배달원 심사'
    } else {
      return '배달 추적';
    }
  }

  public reFormatDate(date) {
    var ymd = date.toISOString().slice(0,10).split('-');
    return ymd[0] + '년 ' + ymd[1] + '월 ' + ymd[2] + '일';
  }

}