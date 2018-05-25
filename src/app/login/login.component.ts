import { 
  Component,
  OnInit
} 
from '@angular/core';
import { 
  FormGroup,
  FormControl,
  Validators,
  Form
} from '@angular/forms';
import { SweetAlertService, RouteService, LoginSessionService } from '../core/services';
import { LoginService } from '../core/services/http';

@Component({
  selector: 'dv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  private nameControl : FormControl;
  private passwordControl : FormControl;

  constructor(private sweetAlertService: SweetAlertService,
              private loginSessionService: LoginSessionService,
              private routeService: RouteService,
              private loginService: LoginService){
  }

  ngOnInit() {
    this.nameControl = new FormControl('',[
      Validators.required,
    ])
    this.passwordControl = new FormControl('',[
      Validators.required
    ]);
  }

  get isNameValid() {
    return !(this.nameControl.invalid && this.nameControl.dirty);
  }

  get isPassWordValid() {
    return !(this.passwordControl.invalid && this.passwordControl.dirty);
  }

  onLoginBtnClick() {
    const title = '로그인 에러';
    if (!this.isNameValid) {
      return this.sweetAlertService.showErrorAlert(title, '아이디를 입력하세요');
    }
    if (!this.isPassWordValid) {
      return this.sweetAlertService.showErrorAlert(title, '패스워드를 입력하세요');
    }
    this.sweetAlertService.showLoading('로그인 중');
    this.loginService.login(this.nameControl.value, this.passwordControl.value)
      .subscribe(result => {
        const token = result.accessToken;
        if(!token) {
          this.sweetAlertService.showErrorAlert(title, '알수없는 에러');
          return;
        }
        this.sweetAlertService.hideLoading();
        this.loginSessionService.login(token);
        this.routeService.goPage('/');
      });
  }
}