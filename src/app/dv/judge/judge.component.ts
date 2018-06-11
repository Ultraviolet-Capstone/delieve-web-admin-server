import { 
  Component,
  OnInit
} 
from '@angular/core';
import { EvaluateService } from '../../core/services/http';
import { CommonService, SweetAlertService } from '../../core/services';

@Component({
  selector: 'dv-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.css']
})
export class JudgeComponent implements OnInit {
  
  public remainEvaluateCnt: number = 0;
  public name: string = '';
  public birthday: string = '';
  public email: string = '';

  public profilePath: string ='';

  public idcardPath: string = '';
  public selfiPath: string = '';

  public userId: number = 0;

  public isEnd: boolean = false;

  constructor(private evaluateService: EvaluateService,
              private commonService: CommonService,
              private sweetAlertService: SweetAlertService){
  }

  ngOnInit() {  
    this.initData(); 
  }

  initData() {
    this.evaluateService.getEvaluateTotalCnt()
      .subscribe(cntInfo => {
        this.remainEvaluateCnt = cntInfo.total;
      });
    
    this.evaluateService.getEvaluateInfo()
      .subscribe(evaluateInfo => {
        if(Object.keys(evaluateInfo).length === 0) {
          this.isEnd = true;
          this.sweetAlertService.showSweetAlert('심사', '남은 배달원 심사가 없습니다', 'warning');
        } else {
          this.isEnd = false;
        }
        this.loadData(evaluateInfo);
        if (!this.isEnd) {
          this.loadImages(evaluateInfo.userId);
        }
      });
  }


  loadImages(userId: number) {
    this.evaluateService.getEvaluateIdCard(userId)
      .subscribe(idcard => {
        this.idcardPath = idcard.url;
      });
    this.evaluateService.getEvaluateSelfi(userId)
      .subscribe(selfi => {
        this.selfiPath = selfi.url;
      });
  }

  loadData(evaluateInfo) {
    
    if(this.isEnd) {
      this.name = '홍길동';
      this.birthday = 'xxxx년 xx월 xx일';
      this.email = 'xxxxx@xxxxx.com';
      this.profilePath = '/assets/images/profile.png';
      this.idcardPath = '/assets/images/idcard.png'
      this.selfiPath = '/assets/images/selfi.png'
    } else {
      this.isEnd = false;
      this.name = evaluateInfo.name;
      this.birthday = this.commonService.reFormatDate(new Date(evaluateInfo.birthday));
      this.email = evaluateInfo.email;
      this.profilePath = evaluateInfo.selfiUrl;
      this.userId = evaluateInfo.userId;
    }  
  }

  onClickBtn(status: string) {
    this.evaluateService.updateStatus(this.userId, status)
      .subscribe(result => {
        this.initData();
      });
  }

}
