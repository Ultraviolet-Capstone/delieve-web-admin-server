import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { 
  HttpService,
  LoginService
} from '../http';

@NgModule({
  imports     : [
    HttpClientModule,
  ],
  declarations: [],
  exports     : [ HttpClientModule ],
  providers   : [
    HttpService,
    LoginService
  ]
})
export class HttpModule {

}