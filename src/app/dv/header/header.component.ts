import { 
  Component, OnInit
} 
from '@angular/core'
import { LoginSessionService } from '../../core/services';

@Component({
  selector: 'dv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {  
  }

  onLogOutClick() {
    
  }
}
