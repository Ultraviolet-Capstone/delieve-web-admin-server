import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { 
  SweetAlertService,
  LoginSessionService,
  RouteService
} from "./services";

import { HttpModule } from '@angular/http';

@NgModule({
  imports     : [ 
    CommonModule,
    BrowserModule,
    HttpModule,
  ],
  declarations: [],
  exports     : [],
  providers   : [
    SweetAlertService,
    LoginSessionService,
    RouteService
  ]
})
export class CoreModule {

}