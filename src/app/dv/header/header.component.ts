import { 
  Component,
  OnInit,
  Input
} 
from '@angular/core'
import { LoginSessionService, RouteService, SweetAlertService, CommonService } from '../../core/services';

@Component({
  selector: 'dv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() sideViewIdx: number = 0;

  constructor(private loginSessionService: LoginSessionService,
              private routeServcie: RouteService,
              private sweetAlertService: SweetAlertService,
              private commonService: CommonService){
  }

  onLogOutClick() {
    this.sweetAlertService.showConfirmAlert('로그아웃', '로그아웃 하시겠습니까?', '확인')
      .then(result => {
        if (result.value) {
          this.loginSessionService.clear();
          this.routeServcie.goLoginPage();
        }
      })
  }




}
