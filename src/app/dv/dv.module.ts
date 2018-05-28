import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DvComponent,
  HeaderComponent,
  SideViewComponent,
  HomeComponent,
  JudgeComponent,
  TrackComponent
} from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations : [
    DvComponent,
    HeaderComponent,
    SideViewComponent,
    HomeComponent,
    JudgeComponent,
    TrackComponent
  ],
  exports : [],
  providers : []
})
export class DvModule {
}