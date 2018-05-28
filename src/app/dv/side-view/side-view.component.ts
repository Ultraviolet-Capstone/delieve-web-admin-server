import { 
  Component,
  OnInit,
  OnDestroy,
  Input
} 
from '@angular/core'
import { LoginSessionService, ContentService } from '../../core/services';

@Component({
  selector: 'dv-side-view',
  templateUrl: './side-view.component.html',
  styleUrls: ['./side-view.component.css']
})
export class SideViewComponent implements OnInit {
  
  public adminName: string = '';
  @Input() sideViewIdx: number = 0;

  constructor(private loginSessionService: LoginSessionService,
              private contentService: ContentService){
  }

  ngOnInit() {
    this.loadAdminInfo();
  }

  private loadAdminInfo() {
    const adminInfo = this.loginSessionService.token();
    this.adminName = adminInfo.name;
  }

  public onSideViewBtnClick(index: number) {
    this.contentService.clickSideView(index);
  }

  pressedClass(index: number) {
    return this.isClicked(index) ? 'pressed' : ''; 
  }

  private isClicked(index: number) {
    return this.sideViewIdx === index;
  }
}
