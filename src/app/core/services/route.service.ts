import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from './sweet-alert.service';

@Injectable()
export class RouteService {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private sweetAlertService: SweetAlertService) {
  }

  splitUrlsForParseToken() {
    const beforeUrl: string = this.router.url;
    const urls: Array<string> = beforeUrl.split('?token=');
    if (urls.length != 2) {
      this.goLoginPage();
    }
    return urls;
  }

  parseToken() {
    return this.route.queryParams;
  }

  goLoginPage() {
    // this.showLoginErrorAlert();
    this.router.navigate([`/login`]);
  }

  goPage(url, params?) {
    this.router.navigate([url], params);
  }

  showLoginErrorAlert() {
    this.sweetAlertService.showSweetAlert('로그인 과정에서 문제가 있습니다', '다시 로그인 해주세요', 'error');
  }

}