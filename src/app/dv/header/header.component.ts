import { 
  Component, OnInit
} 
from '@angular/core'
import { LoginSessionService, RouteService, SweetAlertService } from '../../core/services';

@Component({
  selector: 'dv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private loginSessionService: LoginSessionService,
              private routeServcie: RouteService,
              private sweetAlertService: SweetAlertService){
  }

  onLogOutClick() {
    this.sweetAlertService.showConfirmAlert('로그아웃', '로그아웃 하시겠습니까?', '확인')
      .then(result => {
        if (result) {
          this.loginSessionService.clear();
          this.routeServcie.goLoginPage();
        }
      })
  }
}
