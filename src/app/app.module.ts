import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core';
import { DvModule } from './dv/dv.module';
import { HttpModule } from './core/services/http/http.module';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { AuthGuard } from './guard';
import { LoginService } from './core/services/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    DvModule,
    HttpModule
  ],
  exports: [],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
