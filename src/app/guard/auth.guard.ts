import { Injectable } from "@angular/core";

import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { 
  LoginSessionService
} from "../core/services";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private loginSessionService: LoginSessionService){
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginSessionService.isLogined()) {
      return true;
    }
    this.router.navigate(['./login']);
    return false;
  }
}