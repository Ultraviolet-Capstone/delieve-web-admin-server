import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { 
  SweetAlertService,
  LoginSessionService,
  RouteService,
  ContentService,
  CommonService
} from "./services";

import { HttpModule } from '@angular/http';

@NgModule({
  imports     : [ 
    BrowserModule,
    HttpModule,
  ],
  declarations: [],
  exports     : [],
  providers   : [
    SweetAlertService,
    LoginSessionService,
    RouteService,
    ContentService,
    CommonService
  ]
})
export class CoreModule {

}