import { 
  Component,
  OnInit
} 
from '@angular/core';
import { 
  FormControl,
  Validators,
} from '@angular/forms';
import { SweetAlertService } from '../core/services';
import { LoginService } from '../core/services/http';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dv-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QRComponent implements OnInit {
  public phoneNumberControl : FormControl;
  public isLogined: boolean = false;

  public mask = [ '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ ];
  public hashValue;

  private matchingId: number = 0;

  constructor(private sweetAlertService: SweetAlertService,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private titleService: Title){
  }

  ngOnInit() {
    this.titleService.setTitle('딜리브 수신자');

    this.route.params.subscribe(params => {
      this.matchingId = +params['matchingId'];
   });

    this.phoneNumberControl = new FormControl('',[
      Validators.required,
    ])
  }

  get isPhoneValid() {
    return !(this.phoneNumberControl.invalid && this.phoneNumberControl.dirty);
  }

  onLoginBtnClick() {
    const title = '로그인 에러';
    if (!this.isPhoneValid) {
      return this.sweetAlertService.showErrorAlert(title, '아이디를 입력하세요');
    }
    this.sweetAlertService.showLoading('로그인 중');
    // this.phoneNumberControl.value

    this.loginService.receiverLogin(this.phoneFormat2String, this.matchingId)
      .subscribe(result => {
        this.sweetAlertService.hideLoading();
        this.hashValue = result["hashValue"];
        this.isLogined = true;
      });
  }

  get phoneFormat2String() {
    var phoneNumber = this.phoneNumberControl.value;
    phoneNumber = phoneNumber.replace("(", "");
    phoneNumber = phoneNumber.replace(")", "");
    phoneNumber = phoneNumber.replace(" ", "");
    return phoneNumber.replace("-", "");
  }
}