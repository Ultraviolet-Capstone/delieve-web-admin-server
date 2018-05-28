import { 
  Component, OnInit, OnDestroy
} 
from '@angular/core'
import { SweetAlertService, ContentService } from '../../core/services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'dv-main',
  templateUrl: './dv.component.html',
  styleUrls: ['./dv.component.css']
})
export class DvComponent implements OnInit, OnDestroy {

  private subs : Subscription[] = [];
  private sideViewIdx = 1;

  constructor(private sweetAlertService: SweetAlertService,
              private contentService: ContentService) {
  }

  ngOnInit() {
    this.initSubscriptions();
  }

  private initSubscriptions() {
    this.subs.push(
      this.contentService.sideView$
        .filter(index => index !== this.sideViewIdx)
        .subscribe(index => this.sideViewIdx = index)
    )
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
