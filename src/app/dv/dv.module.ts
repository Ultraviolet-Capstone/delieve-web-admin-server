import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DvComponent } from './main';
import { HeaderComponent } from './header';
import { SideViewComponent } from './side-view';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations : [
    DvComponent,
    HeaderComponent,
    SideViewComponent
  ],
  exports : [],
  providers : []
})
export class DvModule {
}