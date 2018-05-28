import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { 
  SweetAlertService,
  LoginSessionService,
  RouteService,
  ContentService
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
    ContentService
  ]
})
export class CoreModule {

}