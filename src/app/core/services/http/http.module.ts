import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { 
  HttpService,
  LoginService,
  EvaluateService
} from '../http';

@NgModule({
  imports     : [
    HttpClientModule,
  ],
  declarations: [],
  exports     : [ HttpClientModule ],
  providers   : [
    HttpService,
    LoginService,
    EvaluateService
  ]
})
export class HttpModule {

}