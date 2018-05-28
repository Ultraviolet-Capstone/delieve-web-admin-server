import { 
  Component, OnInit, OnDestroy
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
}
