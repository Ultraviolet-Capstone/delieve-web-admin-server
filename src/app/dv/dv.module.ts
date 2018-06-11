import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DvComponent,
  HeaderComponent,
  SideViewComponent,
  HomeComponent,
  JudgeComponent,
  TrackComponent,
  TrackTableComponent,
  TrackDetailComponent
} from './';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations : [
    DvComponent,
    HeaderComponent,
    SideViewComponent,
    HomeComponent,
    JudgeComponent,
    TrackComponent,
    TrackTableComponent,
    TrackDetailComponent
  ],
  exports : [],
  providers : []
})
export class DvModule {
}