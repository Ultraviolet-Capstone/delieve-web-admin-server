import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core';
import { DvModule } from './dv/dv.module';
import { HttpModule } from './core/services/http/http.module';
import { AppRoutingModule } from './app.routing';
import { TextMaskModule } from 'angular2-text-mask';
import { QRCodeModule } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { AuthGuard } from './guard';
import { QRComponent } from './qr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    DvModule,
    HttpModule,
    TextMaskModule,
    QRCodeModule
  ],
  exports: [],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
