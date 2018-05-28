import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContentService {
  
  private sideViewSrc = new Subject<number>();
  sideView$ = this.sideViewSrc.asObservable();

  public clickSideView(index: number) {
    this.sideViewSrc.next(index);
  }


}