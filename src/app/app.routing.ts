import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { DvComponent } from './dv';

import { AuthGuard } from './guard';
import { QRComponent } from './qr';

export const routes: Routes = [
  { path: '', component: DvComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'qr/:matchingId', component: QRComponent},
  { path: '**', redirectTo: '' }
];
    
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {}